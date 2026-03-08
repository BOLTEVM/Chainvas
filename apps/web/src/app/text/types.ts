export type TextToolType =
    | "SELECT" | "DIRECT_SELECT"
    | "TEXT" | "TEXT_ON_PATH"
    | "LINE"
    | "RECTANGLE_FRAME" | "ELLIPSE_FRAME" | "POLYGON_FRAME"
    | "RECTANGLE" | "ELLIPSE" | "POLYGON"
    | "HAND" | "ZOOM";

export interface ToolGroup {
    id: TextToolType;
    icon: any; // LucideIcon
    label: string;
    subTools?: { id: TextToolType; label: string; icon: any }[];
}

export interface TypographyOptions {
    fontFamily: string;
    fontSize: number;
    fontWeight: string;
    lineHeight: number;
    letterSpacing: number;
    textAlign: "left" | "center" | "right" | "justify";
    color: string;
    bold: boolean;
    italic: boolean;
}

export interface PageData {
    id: string;
    number: number;
}

export interface CanvasObject {
    id: string;
    type: TextToolType;
    x: number;
    y: number;
    width: number;
    height: number;
    contentId?: string; // For Yjs text fragment ID
    pageId: string; // The ID of the page the object belongs to
    isSelected?: boolean;
    styles?: {
        backgroundColor?: string;
        borderColor?: string;
        borderWidth?: number;
        borderRadius?: string;
    };
}
