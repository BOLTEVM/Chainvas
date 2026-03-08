export type TrackType = "VIDEO" | "AUDIO" | "ADJUSTMENT" | "TEXT";

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
    startTime: number;
    duration: number;
    opacity: number;
    position: { x: number; y: number };
    scale: number;
    rotation: number;
    color: string;
    url?: string;
    styles: LayerStyles;
}

export interface PlaybackState {
    currentTime: number;
    duration: number;
    isPlaying: boolean;
    fps: number;
}
