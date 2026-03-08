import { fabric } from "fabric";

export type ToolType = "MOVE" | "SELECT" | "BRUSH" | "ERASER" | "TEXT" | "SHAPE" | "HAND" | "ZOOM";

export interface ToolOptions {
    brushSize: number;
    brushColor: string;
    fontSize: number;
    fontColor: string;
    shapeFill: string;
    shapeStroke: string;
    shapeStrokeWidth: number;
}

export interface FabricObject extends fabric.Object {
    id?: string;
    locked?: boolean;
    name?: string;
}

export interface LayerData {
    id: string;
    type: string;
    visible: boolean;
    locked: boolean;
    name: string;
}

export interface RemoteCursor {
    id: string;
    x: number;
    y: number;
    color: string;
    name: string;
}
