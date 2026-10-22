export type TrackType = "VIDEO" | "AUDIO" | "IMAGE" | "SOLID" | "ADJUSTMENT" | "TEXT";

export interface Keyframe {
    time: number;
    value: number | string;
    easing: "linear" | "easeIn" | "easeOut" | "easeInOut";
}

export interface LayerStyles {
    dropShadow: {
        enabled: boolean;
        color: string;
        blur: number;
        distance: number;
        angle: number;
        opacity: number;
    };
    blur: {
        enabled: boolean;
        amount: number;
    };
}

export interface Layer {
    id: string;
    name: string;
    type: TrackType;
    visible: boolean;
    muted: boolean;
    locked: boolean;
    solo: boolean;
    /** Composition time (seconds) at which the layer becomes visible. */
    startTime: number;
    /** How long (seconds) the layer is visible in the composition. */
    duration: number;
    /** Offset (seconds) into the source media where playback of this layer begins. */
    inPoint: number;
    /** Intrinsic length of the source media in seconds (undefined for generated layers). */
    sourceDuration?: number;
    /** Intrinsic pixel size of the source media (video / image). */
    mediaWidth?: number;
    mediaHeight?: number;
    opacity: number;
    /** Centre of the layer as a percentage of the composition size. */
    position: { x: number; y: number };
    /** Width of the layer as a percentage of the composition width. */
    scale: number;
    rotation: number;
    /** Audio gain 0–100 for VIDEO / AUDIO layers. */
    volume: number;
    color: string;
    url?: string;
    /** Original file name – used to re-link media when a saved project is re-opened. */
    fileName?: string;
    /** TEXT layers */
    text?: string;
    /** Font size as a percentage of composition height (TEXT layers). */
    fontSize?: number;
    fontFamily?: string;
    styles: LayerStyles;
}

export interface PlaybackState {
    currentTime: number;
    duration: number;
    isPlaying: boolean;
    fps: number;
}

export interface CompositionSettings {
    name: string;
    width: number;
    height: number;
    fps: number;
    duration: number;
}

export type RenderFormat = "mp4" | "gif" | "png-sequence";

export interface RenderOptions {
    format: RenderFormat;
    /** 1 = full composition resolution, 0.5 = half, etc. */
    resolutionScale: number;
    /** libx264 constant-rate-factor (lower = better). */
    quality: number;
    includeAudio: boolean;
}

/** Serialised shape written by File ▸ Save and read by File ▸ Open. */
export interface VideoProjectFile {
    version: 1;
    app: "bolt-chainvas-video";
    savedAt: string;
    composition: CompositionSettings;
    layers: Layer[];
}

export const DEFAULT_LAYER_STYLES: LayerStyles = {
    dropShadow: { enabled: false, color: "#000000", blur: 10, distance: 5, angle: 45, opacity: 50 },
    blur: { enabled: false, amount: 0 },
};

export const DEFAULT_COMPOSITION: CompositionSettings = {
    name: "Composition 1",
    width: 1920,
    height: 1080,
    fps: 30,
    duration: 10,
};

export const LAYER_COLORS: Record<TrackType, string> = {
    VIDEO: "#4f46e5",
    AUDIO: "#10b981",
    IMAGE: "#f59e0b",
    SOLID: "#d391fc",
    ADJUSTMENT: "#a855f7",
    TEXT: "#00e0ff",
};

export const uid = () => Math.random().toString(36).slice(2, 11);

/** Is the layer on-screen (or audible) at composition time `t`? */
export const isLayerActiveAt = (layer: Layer, t: number) =>
    t >= layer.startTime && t < layer.startTime + layer.duration;

/** Convert composition time to the layer's media time. */
export const layerMediaTime = (layer: Layer, t: number) =>
    Math.max(0, (layer.inPoint ?? 0) + (t - layer.startTime));

/** Visible-layer filter honouring the `solo` switches. */
export const visibleLayers = (layers: Layer[]) => {
    const anySolo = layers.some((l) => l.solo);
    return layers.filter((l) => l.visible && (!anySolo || l.solo));
};

/**
 * Upgrade a layer loaded from an older project file (or a collaborator on an
 * older build) so every field the editor relies on exists.
 */
export const normalizeLayer = (raw: Partial<Layer> & { id: string }): Layer => ({
    id: raw.id,
    name: raw.name ?? "Layer",
    type: raw.type ?? "SOLID",
    visible: raw.visible ?? true,
    muted: raw.muted ?? false,
    locked: raw.locked ?? false,
    solo: raw.solo ?? false,
    startTime: raw.startTime ?? 0,
    duration: raw.duration ?? 5,
    inPoint: raw.inPoint ?? 0,
    sourceDuration: raw.sourceDuration,
    mediaWidth: raw.mediaWidth,
    mediaHeight: raw.mediaHeight,
    opacity: raw.opacity ?? 100,
    position: raw.position ?? { x: 50, y: 50 },
    scale: raw.scale ?? 100,
    rotation: raw.rotation ?? 0,
    volume: raw.volume ?? 100,
    color: raw.color ?? LAYER_COLORS[raw.type ?? "SOLID"],
    url: raw.url,
    fileName: raw.fileName,
    text: raw.text,
    fontSize: raw.fontSize,
    fontFamily: raw.fontFamily,
    styles: {
        dropShadow: { ...DEFAULT_LAYER_STYLES.dropShadow, ...(raw.styles?.dropShadow ?? {}) },
        blur: { ...DEFAULT_LAYER_STYLES.blur, ...(raw.styles?.blur ?? {}) },
    },
});
