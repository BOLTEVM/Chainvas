"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { useYjs } from "@/hooks/useYjs";
import * as Y from "yjs";
import { fabric } from "fabric";

// Modular Components
import Toolbar from "@/components/photo-editor/Toolbar";
import OptionsBar from "@/components/photo-editor/OptionsBar";
import NavigatorPanel from "@/components/photo-editor/NavigatorPanel";
import PhotoMenuBar from "@/components/photo-editor/PhotoMenuBar";
import PhotoModal from "@/components/photo-editor/PhotoModal";
import PropertiesPanel from "@/components/photo-editor/PropertiesPanel";
import LayerPanel from "@/components/photo-editor/LayerPanel";
import MintingModal, { TokenType } from "@/components/profile/MintingModal";
import { ElementKanbanPanel } from "@/components/shared/ElementKanbanPanel";
import { useMinting } from "@/hooks/useMinting";

// Types
import { ToolType, ToolOptions, FabricObject, LayerData, RemoteCursor } from "./types";

export default function PhotoEditor() {
    const { ydoc, provider, synced } = useYjs("bolt-photo-ps-v2");
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fabricCanvas = useRef<fabric.Canvas | null>(null);
    const activeToolRef = useRef<ToolType>("MOVE");
    const isDragging = useRef(false);
    const dragStart = useRef({ x: 0, y: 0 });
    const dragPreview = useRef<fabric.Rect | null>(null);
    const workspaceRef = useRef<HTMLDivElement>(null);
    const panStart = useRef<{ x: number; y: number; scrollLeft: number; scrollTop: number } | null>(null);
    const refreshLayersRef = useRef<() => void>(() => { });
    const clipboardRef = useRef<fabric.Object | null>(null);

    // UI State
    const [activeTool, setActiveTool] = useState<ToolType>("MOVE");
    const { mintAsset, isMinting } = useMinting();
    const [isMintModalOpen, setIsMintModalOpen] = useState(false);

    const handleMint = async (type: TokenType, config: { name: string; symbol: string; amount?: number; mediaType?: number }) => {
        if (!fabricCanvas.current) return;
        
        try {
            // Capture high-res snapshot
            const dataURL = fabricCanvas.current.toDataURL({ 
                format: "png", 
                quality: 1,
                multiplier: toolOptions.exportScale || 1
            });
            
            // Convert Base64 to Blob for IPFS upload
            const response = await fetch(dataURL);
            const blob = await response.blob();
            
            const success = await mintAsset(type, config, blob);
            if (success) setIsMintModalOpen(false);
        } catch (error) {
            console.error("Export for minting failed:", error);
        }
    };

    useEffect(() => {
        activeToolRef.current = activeTool;
    }, [activeTool]);
    const [toolOptions, setToolOptions] = useState<ToolOptions>({
        brushSize: 10,
        brushColor: "#00e0ff",
        fontSize: 24,
        fontColor: "#ffffff",
        shapeFill: "#00e0ff33",
        shapeStroke: "#00e0ff",
        shapeStrokeWidth: 2,
        hardness: 100,
        exportScale: 2
    });
    // Mirror tool options into a ref so the (mount-only) fabric mouse handlers read fresh values
    const toolOptionsRef = useRef<ToolOptions>(toolOptions);
    useEffect(() => {
        toolOptionsRef.current = toolOptions;
    }, [toolOptions]);

    const [canvasWidth, setCanvasWidth] = useState(800);
    const [canvasHeight, setCanvasHeight] = useState(600);
    const [zoom, setZoom] = useState(100);
    const [activeObject, setActiveObject] = useState<FabricObject | null>(null);
    const [layerList, setLayerList] = useState<LayerData[]>([]);
    const [remoteCursors, setRemoteCursors] = useState<RemoteCursor[]>([]);

    // UI Visibility State
    const [showToolbar, setShowToolbar] = useState(true);
    const [showLayers, setShowLayers] = useState(true);
    const [showProperties, setShowProperties] = useState(true);
    const [showNavigator, setShowNavigator] = useState(true);

    // Modal State
    const [modalConfig, setModalConfig] = useState<{
        isOpen: boolean;
        type: "NEW" | "PREFERENCES" | "EXPORT" | "HELP" | null;
        title: string;
    }>({ isOpen: false, type: null, title: "" });

    const [newDocData, setNewDocData] = useState({ width: canvasWidth, height: canvasHeight });

    // Collaborative state
    const yObjects = ydoc.getMap<Record<string, unknown>>("canvas-objects");
    const yConfig = ydoc.getMap<number>("canvas-config");

    // History (Undo/Redo)
    const undoManager = useMemo(() => new Y.UndoManager(yObjects), [yObjects]);

    // Initialize Fabric Canvas
    useEffect(() => {
        if (!canvasRef.current || fabricCanvas.current) return;

        const canvas = new fabric.Canvas(canvasRef.current, {
            width: canvasWidth,
            height: canvasHeight,
            backgroundColor: "#1e1e1e",
            preserveObjectStacking: true,
        });

        fabricCanvas.current = canvas;

        // Selection listeners
        canvas.on("selection:created", (e: any) => setActiveObject(e.target as FabricObject || null));
        canvas.on("selection:updated", (e: any) => setActiveObject(e.target as FabricObject || null));
        canvas.on("selection:cleared", () => setActiveObject(null));

        // Sync logic
        const syncToYjs = (options: { target?: fabric.Object }) => {
            const obj = options.target as FabricObject;
            if (!obj || !obj.id) return;
            yObjects.set(obj.id, (obj as any).toObject(["id", "locked", "name"]) as Record<string, unknown>);
        };

        canvas.on("object:modified", syncToYjs);
        canvas.on("object:moving", syncToYjs);
        canvas.on("object:scaling", syncToYjs);
        canvas.on("object:rotating", syncToYjs);
        canvas.on("text:changed", syncToYjs);

        // Brush / eraser strokes: give them an id so they persist and sync like other layers
        canvas.on("path:created", (opt: any) => {
            const path = opt.path as FabricObject | undefined;
            if (!path) return;
            const id = Math.random().toString(36).substr(2, 9);
            path.id = id;
            path.name = activeToolRef.current === "ERASER" ? "Eraser Stroke" : "Brush Stroke";
            yObjects.set(id, (path as any).toObject(["id", "name", "locked"]));
            updateLayerList();
        });

        // Layer list logic
        const updateLayerList = () => {
            setLayerList(canvas.getObjects().map((o: any) => {
                const fo = o as FabricObject;
                return {
                    id: fo.id || "",
                    type: o.type || "",
                    visible: o.visible !== false,
                    locked: !!fo.locked,
                    name: (o as FabricObject).name || `${o.type} ${fo.id?.substring(0, 4)}`
                };
            }));
        };

        canvas.on("object:added", updateLayerList);
        canvas.on("object:removed", updateLayerList);
        canvas.on("object:modified", updateLayerList);
        refreshLayersRef.current = updateLayerList;

        // Drag-to-create listeners
        canvas.on("mouse:down", (opt: any) => {
            const tool = activeToolRef.current;
            const mouseEvent = opt.e as MouseEvent;

            if (tool === "HAND") {
                const ws = workspaceRef.current;
                if (ws) {
                    panStart.current = { x: mouseEvent.clientX, y: mouseEvent.clientY, scrollLeft: ws.scrollLeft, scrollTop: ws.scrollTop };
                    canvas.setCursor("grabbing");
                }
                return;
            }

            if (tool === "ZOOM") {
                setZoom(prev => mouseEvent.altKey ? Math.max(prev - 25, 10) : Math.min(prev + 25, 400));
                return;
            }

            if (tool === "TEXT" || tool === "SELECT" || tool === "SHAPE") {
                const pointer = canvas.getPointer(opt.e);
                isDragging.current = true;
                dragStart.current = { x: pointer.x, y: pointer.y };
                const opts = toolOptionsRef.current;

                if (tool === "SHAPE") {
                    const rect = new fabric.Rect({
                        left: pointer.x,
                        top: pointer.y,
                        width: 0,
                        height: 0,
                        fill: opts.shapeFill,
                        stroke: opts.shapeStroke,
                        strokeWidth: opts.shapeStrokeWidth,
                        rx: 4,
                        ry: 4
                    });
                    dragPreview.current = rect;
                    canvas.add(rect);
                } else if (tool === "TEXT") {
                    // Create a placeholder box
                    const rect = new fabric.Rect({
                        left: pointer.x,
                        top: pointer.y,
                        width: 0,
                        height: 0,
                        fill: "transparent",
                        stroke: "#00e0ff",
                        strokeDashArray: [5, 5],
                        strokeWidth: 1
                    });
                    dragPreview.current = rect;
                    canvas.add(rect);
                }
            }
        });

        canvas.on("mouse:move", (opt: any) => {
            if (panStart.current && workspaceRef.current) {
                const me = opt.e as MouseEvent;
                workspaceRef.current.scrollLeft = panStart.current.scrollLeft - (me.clientX - panStart.current.x);
                workspaceRef.current.scrollTop = panStart.current.scrollTop - (me.clientY - panStart.current.y);
                return;
            }
            if (!isDragging.current || !dragPreview.current) return;
            const pointer = canvas.getPointer(opt.e);
            const left = Math.min(dragStart.current.x, pointer.x);
            const top = Math.min(dragStart.current.y, pointer.y);
            const width = Math.abs(dragStart.current.x - pointer.x);
            const height = Math.abs(dragStart.current.y - pointer.y);

            dragPreview.current.set({ left, top, width, height });
            canvas.requestRenderAll();
        });

        canvas.on("mouse:up", (opt: any) => {
            if (panStart.current) {
                panStart.current = null;
                canvas.setCursor("grab");
                return;
            }
            if (!isDragging.current) return;
            const tool = activeToolRef.current;
            const pointer = canvas.getPointer(opt.e);
            const opts = toolOptionsRef.current;

            if (dragPreview.current) {
                const finalWidth = Math.abs(dragStart.current.x - pointer.x);
                const finalHeight = Math.abs(dragStart.current.y - pointer.y);
                const finalLeft = Math.min(dragStart.current.x, pointer.x);
                const finalTop = Math.min(dragStart.current.y, pointer.y);

                canvas.remove(dragPreview.current);
                dragPreview.current = null;

                if (tool === "TEXT" && finalWidth > 5) {
                    const id = Math.random().toString(36).substr(2, 9);
                    // Textbox honours the dragged width (IText ignores it)
                    const text = new fabric.Textbox("Type here...", {
                        left: finalLeft,
                        top: finalTop,
                        width: finalWidth,
                        fill: opts.fontColor,
                        fontSize: opts.fontSize,
                        fontFamily: "Inter"
                    });
                    const fabricText = text as FabricObject;
                    fabricText.id = id;
                    fabricText.name = "Text Layer";
                    canvas.add(text);
                    canvas.setActiveObject(text);
                    text.enterEditing();
                    text.selectAll();
                    yObjects.set(id, (fabricText as any).toObject(["id", "name", "locked"]));
                } else if (tool === "SHAPE" && finalWidth > 5) {
                    const id = Math.random().toString(36).substr(2, 9);
                    const rect = new fabric.Rect({
                        left: finalLeft,
                        top: finalTop,
                        width: finalWidth,
                        height: finalHeight,
                        fill: opts.shapeFill,
                        stroke: opts.shapeStroke,
                        strokeWidth: opts.shapeStrokeWidth,
                        rx: 4,
                        ry: 4
                    }) as FabricObject;
                    rect.id = id;
                    rect.name = "Rectangle";
                    canvas.add(rect);
                    canvas.setActiveObject(rect);
                    yObjects.set(id, (rect as any).toObject(["id", "name", "locked"]));
                }
            }

            isDragging.current = false;
        });

        return () => {
            canvas.dispose();
            fabricCanvas.current = null;
            refreshLayersRef.current = () => { };
        };
        // Mount once: dimension changes are applied via setDimensions below. Recreating the canvas
        // here would wipe every layer and leave the Yjs observer bound to a disposed canvas.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [yObjects]);

    // Sync Dimensions and Zoom
    useEffect(() => {
        if (!fabricCanvas.current) return;

        const handleConfigUpdate = () => {
            const w = yConfig.get("width");
            const h = yConfig.get("height");
            if (w && w !== canvasWidth) setCanvasWidth(w);
            if (h && h !== canvasHeight) setCanvasHeight(h);
        };

        yConfig.observe(handleConfigUpdate);
        handleConfigUpdate();

        return () => yConfig.unobserve(handleConfigUpdate);
    }, [yConfig, canvasWidth, canvasHeight]);

    useEffect(() => {
        if (!fabricCanvas.current) return;
        fabricCanvas.current.setDimensions({ width: canvasWidth, height: canvasHeight });
        fabricCanvas.current.requestRenderAll();
    }, [canvasWidth, canvasHeight]);

    // Handle Modal Tools
    useEffect(() => {
        if (!fabricCanvas.current) return;
        const canvas = fabricCanvas.current;

        // Reset behaviors
        canvas.isDrawingMode = false;
        canvas.selection = activeTool === "MOVE" || activeTool === "SELECT";
        // Hand/Zoom tools must not pick up or drag objects underneath the pointer
        canvas.skipTargetFind = activeTool === "HAND" || activeTool === "ZOOM";

        // Fix Cursor logic
        if (activeTool === "SELECT") {
            canvas.defaultCursor = "crosshair";
            canvas.hoverCursor = "crosshair";
        } else if (activeTool === "TEXT") {
            canvas.defaultCursor = "text";
            canvas.hoverCursor = "text";
        } else if (activeTool === "MOVE") {
            canvas.defaultCursor = "default";
            canvas.hoverCursor = "default";
        } else {
            canvas.defaultCursor = "default";
        }

        if (activeTool === "BRUSH") {
            canvas.isDrawingMode = true;
            canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
            canvas.freeDrawingBrush.width = toolOptions.brushSize;
            canvas.freeDrawingBrush.color = toolOptions.brushColor;
        } else if (activeTool === "ERASER") {
            canvas.isDrawingMode = true;
            // Fabric 5 doesn't have a built-in eraser brush by default in the same way,
            // but we can use a white pencil or specialized brush.
            canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
            canvas.freeDrawingBrush.width = toolOptions.brushSize;
            canvas.freeDrawingBrush.color = "#1e1e1e"; // Erasing to background
        } else if (activeTool === "HAND") {
            canvas.defaultCursor = "grab";
            canvas.hoverCursor = "grab";
        } else if (activeTool === "ZOOM") {
            canvas.defaultCursor = "zoom-in";
            canvas.hoverCursor = "zoom-in";
        }

    }, [activeTool, toolOptions]);

    // Collaborative Sync (Mapping Y.js to Fabric)
    useEffect(() => {
        if (!fabricCanvas.current) return;
        const canvas = fabricCanvas.current;

        // Plain local edits (origin null) were serialised from the fabric object itself, so re-applying
        // them is redundant; undo/redo transactions carry the UndoManager origin and must be applied.
        const isLocalEcho = (event: Y.YMapEvent<Record<string, unknown>>) =>
            event.transaction.local && event.transaction.origin === null;

        const handleMapUpdate = (event: Y.YMapEvent<Record<string, unknown>>) => {
            event.changes.keys.forEach((change, key) => {
                const data = yObjects.get(key);
                if (change.action === "add" || change.action === "update") {
                    const existing = canvas.getObjects().find((o: any) => (o as FabricObject).id === key);
                    if (existing && data && isLocalEcho(event)) {
                        // Already applied to the fabric object locally.
                    } else if (existing && data) {
                        existing.set(data as fabric.IObjectOptions);
                        if (typeof data.locked === "boolean") {
                            existing.selectable = !data.locked;
                            existing.evented = !data.locked;
                        }
                        existing.setCoords();
                        canvas.requestRenderAll();
                        refreshLayersRef.current();
                    } else if (data) {
                        fabric.util.enlivenObjects([data], (objects: fabric.Object[]) => {
                            objects.forEach(obj => {
                                const fo = obj as FabricObject;
                                fo.id = key;
                                if (fo.locked) {
                                    obj.selectable = false;
                                    obj.evented = false;
                                }
                                canvas.add(obj);
                            });
                            canvas.requestRenderAll();
                        }, "fabric");
                    }
                } else if (change.action === "delete") {
                    const existing = canvas.getObjects().find((o: any) => (o as FabricObject).id === key);
                    if (existing) {
                        canvas.remove(existing);
                        canvas.requestRenderAll();
                    }
                }
            });
        };

        yObjects.observe(handleMapUpdate);

        // Initial Load
        const initial = Array.from(yObjects.entries()).map(([id, data]: any) => ({ ...data, id }));
        if (initial.length > 0 && canvas.getObjects().length === 0) {
            fabric.util.enlivenObjects(initial, (objects: fabric.Object[]) => {
                objects.forEach((obj, idx) => {
                    (obj as FabricObject).id = (initial[idx] as any).id;
                    canvas.add(obj);
                });
                canvas.requestRenderAll();
            }, "fabric");
        }

        return () => yObjects.unobserve(handleMapUpdate);
    }, [yObjects]);

    // Awareness
    useEffect(() => {
        if (!provider) return;
        const handleAwareness = () => {
            const states = Array.from(provider.awareness.getStates().entries());
            setRemoteCursors(states
                .filter(([id, state]: any) => {
                    const s = state as any;
                    return id !== provider.awareness.clientID && s.cursor;
                })
                .map(([id, state]: any) => {
                    const s = state as any;
                    return {
                        id: id.toString(),
                        x: s.cursor.x as number,
                        y: s.cursor.y as number,
                        color: (s.user?.color as string) || "#00e0ff",
                        name: (s.user?.name as string) || "User"
                    };
                }));
        };
        provider.awareness.on("change", handleAwareness);
        return () => provider.awareness.off("change", handleAwareness);
    }, [provider]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!provider) return;
        const bounds = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - bounds.left) / bounds.width) * 100;
        const y = ((e.clientY - bounds.top) / bounds.height) * 100;
        provider.awareness.setLocalStateField("cursor", { x, y });
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const files = Array.from(e.dataTransfer.files) as File[];
        const imageFiles = files.filter(file => file.type.startsWith("image/"));

        imageFiles.forEach(file => {
            const reader = new FileReader();
            reader.onload = (f) => {
                const data = f.target?.result as string;
                fabric.Image.fromURL(data, (img: any) => {
                    if (!fabricCanvas.current) return;

                    const id = Math.random().toString(36).substr(2, 9);
                    const fabricImg = img as FabricObject;
                    fabricImg.id = id;
                    fabricImg.name = file.name || "Image Layer";

                    // Center on canvas
                    img.set({
                        left: (canvasWidth - (img.getScaledWidth())) / 2,
                        top: (canvasHeight - (img.getScaledHeight())) / 2,
                    });

                    // Scale down if too large
                    if (img.getScaledWidth() > canvasWidth || img.getScaledHeight() > canvasHeight) {
                        img.scaleToWidth(canvasWidth * 0.8);
                        // Recenter after scaling
                        img.set({
                            left: (canvasWidth - (img.getScaledWidth())) / 2,
                            top: (canvasHeight - (img.getScaledHeight())) / 2,
                        });
                    }

                    fabricCanvas.current.add(img);
                    fabricCanvas.current.setActiveObject(img);
                    fabricCanvas.current.requestRenderAll();

                    // Sync to Y.js
                    yObjects.set(id, (fabricImg as any).toObject(["id", "name", "locked"]));
                });
            };
            reader.readAsDataURL(file);
        });
    };


    // --- Actions ---

    const handleToolSelect = (tool: ToolType) => {
        setActiveTool(tool);
    };

    const handlePropertyChange = (prop: string, value: string | number) => {
        if (!activeObject) return;
        activeObject.set(prop as any, value);
        activeObject.setCoords();
        fabricCanvas.current?.requestRenderAll();
        if (activeObject.id) {
            yObjects.set(activeObject.id, activeObject.toObject(["id", "name", "locked"]));
        }
    };

    const handleLayerVisibility = (id: string) => {
        const obj = fabricCanvas.current?.getObjects().find((o: any) => (o as FabricObject).id === id);
        if (obj) {
            obj.visible = !obj.visible;
            fabricCanvas.current?.requestRenderAll();
            yObjects.set(id, (obj as any).toObject(["id", "name", "locked"]));
            refreshLayersRef.current();
        }
    };

    const handleLayerLock = (id: string) => {
        const obj = fabricCanvas.current?.getObjects().find((o: any) => (o as FabricObject).id === id) as FabricObject;
        if (obj) {
            obj.locked = !obj.locked;
            (obj as any).selectable = !obj.locked;
            (obj as any).evented = !obj.locked;
            if (obj.locked && fabricCanvas.current?.getActiveObject() === obj) {
                fabricCanvas.current?.discardActiveObject();
            }
            fabricCanvas.current?.requestRenderAll();
            yObjects.set(id, (obj as any).toObject(["id", "name", "locked"]));
            refreshLayersRef.current();
        }
    };

    const exportPng = useCallback(() => {
        if (!fabricCanvas.current) return;
        fabricCanvas.current.discardActiveObject();
        fabricCanvas.current.requestRenderAll();
        const dataURL = fabricCanvas.current.toDataURL({
            format: "png",
            quality: 1,
            multiplier: toolOptions.exportScale || 1
        });
        const link = document.createElement("a");
        link.download = "bolt-composition.png";
        link.href = dataURL;
        link.click();
    }, [toolOptions.exportScale]);

    const addClonedObject = useCallback((source: fabric.Object, offset = 20) => {
        source.clone((cloned: fabric.Object) => {
            const canvas = fabricCanvas.current;
            if (!canvas) return;
            const id = Math.random().toString(36).substr(2, 9);
            (cloned as FabricObject).id = id;
            cloned.set({ left: (cloned.left || 0) + offset, top: (cloned.top || 0) + offset });
            cloned.setCoords();
            canvas.add(cloned);
            canvas.setActiveObject(cloned);
            canvas.requestRenderAll();
            yObjects.set(id, (cloned as any).toObject(["id", "name", "locked"]));
        }, ["name", "locked"]);
    }, [yObjects]);

    const deleteActiveObjects = useCallback(() => {
        const canvas = fabricCanvas.current;
        if (!canvas) return;
        // Handles single objects and multi-selections (an ActiveSelection has no id of its own)
        const targets = canvas.getActiveObjects() as FabricObject[];
        if (targets.length === 0) return;
        canvas.discardActiveObject();
        ydoc.transact(() => {
            targets.forEach(obj => {
                if (obj.id) yObjects.delete(obj.id);
                canvas.remove(obj);
            });
        });
        canvas.requestRenderAll();
        setActiveObject(null);
    }, [ydoc, yObjects]);

    const handleMenuAction = useCallback((id: string) => {
        switch (id) {
            case "FILE_NEW":
                setNewDocData({ width: canvasWidth, height: canvasHeight });
                setModalConfig({ isOpen: true, type: "NEW", title: "New Document" });
                break;
            case "EDIT_PREFERENCES":
                setModalConfig({ isOpen: true, type: "PREFERENCES", title: "Preferences" });
                break;
            case "FILE_SAVE":
                alert("Project state synced to BOLTChain");
                break;
            case "EDIT_UNDO":
                undoManager.undo();
                break;
            case "EDIT_REDO":
                undoManager.redo();
                break;
            case "EDIT_DUPLICATE":
                if (activeObject) addClonedObject(activeObject);
                break;
            case "EDIT_COPY":
                if (activeObject) {
                    activeObject.clone((cloned: fabric.Object) => { clipboardRef.current = cloned; }, ["name", "locked"]);
                }
                break;
            case "EDIT_CUT":
                if (activeObject) {
                    activeObject.clone((cloned: fabric.Object) => {
                        clipboardRef.current = cloned;
                        deleteActiveObjects();
                    }, ["name", "locked"]);
                }
                break;
            case "EDIT_PASTE":
                if (clipboardRef.current) addClonedObject(clipboardRef.current);
                break;
            case "EDIT_DELETE":
                deleteActiveObjects();
                break;
            case "LAYER_RENAME":
                if (activeObject && activeObject.id) {
                    const next = window.prompt("Layer name", activeObject.name || "");
                    if (next !== null && next.trim()) {
                        activeObject.name = next.trim();
                        yObjects.set(activeObject.id, activeObject.toObject(["id", "name", "locked"]));
                        refreshLayersRef.current();
                    }
                }
                break;
            case "EDIT_SELECT_ALL":
                if (fabricCanvas.current) {
                    fabricCanvas.current.discardActiveObject();
                    const sel = new fabric.ActiveSelection(fabricCanvas.current.getObjects(), {
                        canvas: fabricCanvas.current,
                    });
                    fabricCanvas.current.setActiveObject(sel);
                    fabricCanvas.current.requestRenderAll();
                }
                break;
            case "EDIT_DESELECT":
                if (fabricCanvas.current) {
                    fabricCanvas.current.discardActiveObject();
                    fabricCanvas.current.requestRenderAll();
                }
                break;
            case "EDIT_TRANSFORM":
                if (activeObject) {
                    activeObject.set({
                        hasControls: !activeObject.hasControls,
                        hasBorders: !activeObject.hasBorders
                    });
                    fabricCanvas.current?.requestRenderAll();
                }
                break;
            case "FILE_EXPORT_PNG":
                exportPng();
                break;
            case "VIEW_ZOOM_IN": setZoom(prev => Math.min(prev + 10, 400)); break;
            case "VIEW_ZOOM_OUT": setZoom(prev => Math.max(prev - 10, 10)); break;
            case "VIEW_FIT": setZoom(100); break;
            case "VIEW_FULLSCREEN":
                if (typeof document !== "undefined") {
                    if (!document.fullscreenElement) {
                        document.documentElement.requestFullscreen().catch(() => { });
                    } else if (document.exitFullscreen) {
                        document.exitFullscreen().catch(() => { });
                    }
                }
                break;
            case "WINDOW_TOOLBAR": setShowToolbar(prev => !prev); break;
            case "WINDOW_LAYERS": setShowLayers(prev => !prev); break;
            case "WINDOW_PROPERTIES": setShowProperties(prev => !prev); break;
            case "WINDOW_NAVIGATOR": setShowNavigator(prev => !prev); break;
            case "FILE_MINT": setIsMintModalOpen(true); break;
            case "FILE_HELP":
                setModalConfig({ isOpen: true, type: "HELP", title: "Bolt Photo Editor - Help" });
                break;
            default:
                console.log("Action not implemented:", id);
        }
    }, [activeObject, undoManager, yObjects, canvasWidth, canvasHeight, addClonedObject, deleteActiveObjects, exportPng]);


    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Never hijack typing (inputs, selects, fabric's hidden IText textarea, contentEditable)
            const target = e.target as HTMLElement | null;
            const tag = target?.tagName;
            const isEditable = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || !!target?.isContentEditable;
            if (isEditable) return;

            // CTRL/META Shortcuts
            if (e.ctrlKey || e.metaKey) {
                switch (e.key.toLowerCase()) {
                    case "c":
                        handleMenuAction("EDIT_COPY");
                        break;
                    case "x":
                        handleMenuAction("EDIT_CUT");
                        break;
                    case "v":
                        handleMenuAction("EDIT_PASTE");
                        break;
                    case "z":
                        e.preventDefault();
                        if (e.shiftKey) undoManager.redo();
                        else undoManager.undo();
                        break;
                    case "y":
                        e.preventDefault();
                        undoManager.redo();
                        break;
                    case "n":
                        e.preventDefault();
                        handleMenuAction("FILE_NEW");
                        break;
                    case "s":
                        e.preventDefault();
                        handleMenuAction("FILE_SAVE");
                        break;
                    case "j":
                        e.preventDefault();
                        handleMenuAction("EDIT_DUPLICATE");
                        break;
                    case "t":
                        e.preventDefault();
                        handleMenuAction("EDIT_TRANSFORM");
                        break;
                    case "d":
                        e.preventDefault();
                        handleMenuAction("EDIT_DESELECT");
                        break;
                    case "a":
                        e.preventDefault();
                        handleMenuAction("EDIT_SELECT_ALL");
                        break;
                    case "0":
                        e.preventDefault();
                        handleMenuAction("VIEW_FIT");
                        break;
                    case "=":
                    case "+":
                        e.preventDefault();
                        handleMenuAction("VIEW_ZOOM_IN");
                        break;
                    case "-":
                        e.preventDefault();
                        handleMenuAction("VIEW_ZOOM_OUT");
                        break;
                }
                return;
            }

            // Delete / Backspace removes the current selection
            if (e.key === "Delete" || e.key === "Backspace") {
                e.preventDefault();
                handleMenuAction("EDIT_DELETE");
                return;
            }

            // Single-key tool shortcuts (as advertised in the toolbar tooltips)
            if (!e.altKey) {
                const toolKeys: Record<string, ToolType> = {
                    v: "MOVE", m: "SELECT", b: "BRUSH", e: "ERASER", t: "TEXT", u: "SHAPE", h: "HAND", z: "ZOOM"
                };
                const tool = toolKeys[e.key.toLowerCase()];
                if (tool && e.key.length === 1) {
                    setActiveTool(tool);
                    return;
                }
            }

            // F1-F12 Keybinds
            switch (e.key) {
                case "F1":
                    e.preventDefault();
                    setModalConfig({ isOpen: true, type: "HELP", title: "Bolt Photo Editor - Help" });
                    break;
                case "F2":
                    e.preventDefault();
                    handleMenuAction("LAYER_RENAME");
                    break;
                case "F3":
                    e.preventDefault();
                    handleMenuAction("EDIT_DUPLICATE");
                    break;
                case "F4":
                    e.preventDefault();
                    handleMenuAction("EDIT_DELETE");
                    break;
                case "F5":
                    e.preventDefault();
                    handleMenuAction("FILE_EXPORT_PNG");
                    break;
                case "F6":
                    e.preventDefault();
                    setShowToolbar(prev => !prev);
                    break;
                case "F7":
                    e.preventDefault();
                    setShowLayers(prev => !prev);
                    break;
                case "F8":
                    e.preventDefault();
                    setShowProperties(prev => !prev);
                    break;
                case "F9":
                    e.preventDefault();
                    setShowNavigator(prev => !prev);
                    break;
                case "F11":
                    e.preventDefault();
                    handleMenuAction("VIEW_FULLSCREEN");
                    break;
                case "F12":
                    e.preventDefault();
                    setIsMintModalOpen(true);
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [undoManager, setModalConfig, handleMenuAction, setShowToolbar, setShowLayers, setShowProperties, setShowNavigator, setIsMintModalOpen]);

    const setDimensions = (w: number, h: number) => {
        yConfig.set("width", w);
        yConfig.set("height", h);
    };

    return (
        <>
            <div className="flex flex-col h-screen bg-[#1e1e1e] overflow-hidden select-none">
                {/* Top Bar / Menu */}
                <div className="h-9 bg-[#2d2d2d] flex items-center justify-between border-b border-black">
                    <div className="flex items-center h-full">
                        {/* App Icon */}
                        <div className="px-3 h-full flex items-center bg-[#00e0ff]/10">
                            <div className="w-6 h-6 bg-[#00e0ff] flex items-center justify-center rounded-sm shadow-[0_0_10px_rgba(0,224,255,0.3)]">
                                <span className="text-[12px] font-black text-[#1e1e1e] italic">Ps</span>
                            </div>
                        </div>

                        {/* Detailed Menu Bar */}
                        <PhotoMenuBar onAction={handleMenuAction} />
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 bg-[#3c3c3c] px-2 py-0.5 rounded text-[10px] text-gray-400 border border-white/5">
                            <div className={`w-2 h-2 rounded-full ${synced ? "bg-green-500" : "bg-red-500 animate-pulse"}`} />
                            {synced ? "Connected" : "Syncing..."}
                        </div>
                        <button onClick={() => setIsMintModalOpen(true)} className="bg-[#00ffa3] px-3 py-1 rounded text-[11px] font-bold text-black hover:bg-[#00ffa3]/90 shadow-[0_0_10px_rgba(0,255,163,0.2)] ml-2">Mint Asset</button>
                        <button onClick={exportPng} className="bg-secondary px-3 py-1 rounded text-[11px] font-bold text-black hover:bg-secondary/90 shadow-[0_0_10px_rgba(0,224,255,0.2)] ml-2">Export Content</button>
                    </div>
                </div>

                {/* Main Application Area */}
                <div className="flex flex-grow overflow-hidden relative">
                    {/* 1. Left Toolbar */}
                    {showToolbar && (
                        <div className="flex-shrink-0 z-30">
                            <Toolbar activeTool={activeTool} onToolSelect={handleToolSelect} />
                        </div>
                    )}

                    {/* 2. Center Column (Options Bar + Workspace) */}
                    <div className="flex flex-col flex-grow bg-[#1e1e1e] relative overflow-hidden">
                        <OptionsBar
                            activeTool={activeTool}
                            options={toolOptions}
                            onOptionsChange={(o) => setToolOptions(prev => ({ ...prev, ...o }))}
                            canvasWidth={canvasWidth}
                            canvasHeight={canvasHeight}
                            onDimensionsChange={setDimensions}
                        />

                        {/* Workspace Wrapper */}
                        <div
                            ref={workspaceRef}
                            className="flex-grow relative bg-[#1e1e1e] overflow-auto flex items-center justify-center p-20 custom-scrollbar border-r border-[#1e1e1e]"
                            onMouseMove={handleMouseMove}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        >
                            {/* Canvas Container */}
                            <div
                                className="bg-[#050505] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-[#333] relative"
                                style={{
                                    width: canvasWidth,
                                    height: canvasHeight,
                                    transform: `scale(${zoom / 100})`,
                                    transformOrigin: "center center"
                                }}
                            >
                                <canvas ref={canvasRef} />
                            </div>

                            {/* Remote Cursors Overlay */}
                            {remoteCursors.map(cursor => (
                                <motion.div
                                    key={cursor.id}
                                    className="absolute pointer-events-none z-[100]"
                                    style={{
                                        left: `${cursor.x}%`,
                                        top: `${cursor.y}%`,
                                        transform: `scale(${100 / zoom})` // Compensate zoom
                                    }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.65376 12.3673L15.4051 19.1101C16.5147 19.8784 18 19.0818 18 17.7334V5.13203C18 3.51863 16.0398 2.71531 14.8981 3.84742L5.80186 12.8682C4.8465 13.8156 5.86438 15.4243 7.07005 14.654L8.71869 13.6015L5.65376 12.3673Z" style={{ fill: cursor.color, stroke: "black", strokeWidth: 1.5 }} />
                                    </svg>
                                    <div className="ml-5 px-2 py-0.5 rounded text-[10px] font-bold text-white shadow-xl whitespace-nowrap" style={{ backgroundColor: cursor.color }}>
                                        {cursor.name}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* 3. Right Sidebar Panels */}
                    {(showNavigator || showProperties || showLayers) && (
                        <div className="w-[300px] bg-[#2d2d2d] border-l border-[#1e1e1e] flex flex-col z-30">
                            {showNavigator && <NavigatorPanel zoom={zoom} onZoomChange={setZoom} />}

                            <div className="flex-grow flex flex-col overflow-hidden">
                                {activeObject ? (
                                    <div className="flex-grow overflow-hidden">
                                        <ElementKanbanPanel 
                                            elementRef={`PHOTO:${activeObject.id}`}
                                            elementTitle={activeObject.name || "Photo Element"}
                                            elementDescription={`Layer type: ${activeObject.type} at X: ${Math.round(activeObject.left || 0)}, Y: ${Math.round(activeObject.top || 0)}`}
                                        />
                                    </div>
                                ) : (
                                    showProperties && (
                                        <div className="flex-grow overflow-hidden">
                                            <PropertiesPanel activeObject={activeObject} onPropertyChange={handlePropertyChange} />
                                        </div>
                                    )
                                )}
                                {showLayers && (
                                    <div className="h-[300px] border-t border-[#1e1e1e]">
                                        <LayerPanel
                                            layers={layerList}
                                            activeLayerId={activeObject?.id || null}
                                            onSelect={(id) => {
                                                const obj = fabricCanvas.current?.getObjects().find((o: any) => (o as FabricObject).id === id);
                                                if (obj) {
                                                    fabricCanvas.current?.setActiveObject(obj);
                                                    fabricCanvas.current?.requestRenderAll();
                                                }
                                            }}
                                            onToggleVisibility={handleLayerVisibility}
                                            onToggleLock={handleLayerLock}
                                            onDeleteActive={() => handleMenuAction("EDIT_DELETE")}
                                            onRenameActive={() => handleMenuAction("LAYER_RENAME")}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

            </div>

            {/* Dynamic Modals */}
            <PhotoModal
                isOpen={modalConfig.isOpen}
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
                title={modalConfig.title}
                footer={
                    modalConfig.type === "NEW" ? (
                        <>
                            <button
                                onClick={() => setModalConfig({ ...modalConfig, isOpen: false })}
                                className="px-4 py-1.5 text-xs font-bold text-gray-400 hover:text-white transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    const w = newDocData.width > 0 ? newDocData.width : canvasWidth;
                                    const h = newDocData.height > 0 ? newDocData.height : canvasHeight;
                                    // Remove layers through Yjs so collaborators clear too; canvas.clear() would
                                    // only wipe locally and also reset the background colour.
                                    fabricCanvas.current?.discardActiveObject();
                                    ydoc.transact(() => {
                                        Array.from(yObjects.keys()).forEach(key => yObjects.delete(key));
                                        yConfig.set("width", w);
                                        yConfig.set("height", h);
                                    });
                                    fabricCanvas.current?.getObjects().slice().forEach(obj => {
                                        if (!(obj as FabricObject).id) fabricCanvas.current?.remove(obj);
                                    });
                                    fabricCanvas.current?.requestRenderAll();
                                    setActiveObject(null);
                                    setModalConfig({ ...modalConfig, isOpen: false });
                                }}
                                className="bg-[#0078d4] px-6 py-1.5 rounded text-xs font-bold text-white hover:bg-[#0078d4]/90 shadow-lg"
                            >
                                Create
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setModalConfig({ ...modalConfig, isOpen: false })}
                            className="bg-[#3c3c3c] px-6 py-1.5 rounded text-xs font-bold text-white hover:bg-[#454545]"
                        >
                            Close
                        </button>
                    )
                }
            >
                {modalConfig.type === "NEW" && (
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Width (px)</label>
                                <input
                                    type="number"
                                    value={newDocData.width}
                                    onChange={(e: any) => setNewDocData({ ...newDocData, width: parseInt(e.target.value) || 0 })}
                                    className="w-full bg-[#1e1e1e] border border-white/5 rounded px-3 py-2 text-white focus:border-[#0078d4] outline-none transition-colors"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Height (px)</label>
                                <input
                                    type="number"
                                    value={newDocData.height}
                                    onChange={(e: any) => setNewDocData({ ...newDocData, height: parseInt(e.target.value) || 0 })}
                                    className="w-full bg-[#1e1e1e] border border-white/5 rounded px-3 py-2 text-white focus:border-[#0078d4] outline-none transition-colors"
                                />
                            </div>
                        </div>
                        <div className="p-3 bg-[#1e1e1e]/50 border border-white/5 rounded-md text-[11px] text-gray-400">
                            Initial canvas size for the collaborative BOLT workspace.
                        </div>
                    </div>
                )}

                {modalConfig.type === "PREFERENCES" && (
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h4 className="text-[10px] uppercase tracking-widest font-black text-[#00e0ff]">Interface</h4>
                            <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded transition-colors group">
                                <span className="text-xs">Color Theme</span>
                                <div className="flex gap-2">
                                    <div className="w-4 h-4 rounded-full bg-[#1e1e1e] border border-white/20 ring-2 ring-[#0078d4]" />
                                    <div className="w-4 h-4 rounded-full bg-[#2d2d2d] border border-white/20" />
                                    <div className="w-4 h-4 rounded-full bg-[#454545] border border-white/20" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-[10px] uppercase tracking-widest font-black text-[#00e0ff]">Collaboration</h4>
                            <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded transition-colors">
                                <span className="text-xs">Show Remote Cursors</span>
                                <div className="w-8 h-4 bg-[#0078d4] rounded-full relative">
                                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {modalConfig.type === "HELP" && (
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[11px]">
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-gray-500 font-bold">F1</span>
                                <span className="text-gray-300">Help / Keybinds</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-gray-500 font-bold">F7</span>
                                <span className="text-gray-300">Toggle Layers</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-gray-500 font-bold">F2</span>
                                <span className="text-gray-300">Rename Layer</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-gray-500 font-bold">F8</span>
                                <span className="text-gray-300">Toggle Properties</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-gray-500 font-bold">F3</span>
                                <span className="text-gray-300">Duplicate Layer</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-gray-500 font-bold">F9</span>
                                <span className="text-gray-300">Toggle Navigator</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-gray-500 font-bold">F4</span>
                                <span className="text-gray-300">Delete Layer</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-gray-500 font-bold">F11</span>
                                <span className="text-gray-300">Fullscreen</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-gray-500 font-bold">F5</span>
                                <span className="text-gray-300">Quick Export PNG</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 py-1">
                                <span className="text-gray-500 font-bold">F12</span>
                                <span className="text-gray-300">Mint Asset (On-Chain)</span>
                            </div>
                        </div>
                        <div className="p-3 bg-secondary/10 border border-secondary/20 rounded-md text-[10px] text-secondary font-medium leading-relaxed">
                            Pro Tip: Use F6 to quickly toggle the toolbar for a focused creative workspace.
                        </div>
                    </div>
                )}
            </PhotoModal>

            <MintingModal
                isOpen={isMintModalOpen}
                onClose={() => !isMinting && setIsMintModalOpen(false)}
                asset={{ id: ydoc.guid || "photo-doc", name: "Photo Composition", previewUrl: "" }}
                onMint={handleMint}
                isMinting={isMinting}
                defaultMediaType={1}
            />
        </>
    );
}
