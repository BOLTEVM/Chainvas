export type ElementType = "TEXT" | "PHOTO" | "VIDEO" | "MARKETPLACE" | "ASSET";

export interface Tag {
    id: string;
    label: string;
    color: string;
}

export interface KanbanCard {
    id: string;
    elementRef: string; // Format: "TYPE:ID"
    columnId: string;
    order: number;
    title: string;
    description?: string;
}

export interface KanbanColumn {
    id: string;
    title: string;
    order: number;
}

export interface KanbanState {
    columns: KanbanColumn[];
    cards: KanbanCard[];
    tags: Tag[];
    elementTags: Record<string, string[]>; // elementRef -> tagIds[]
}
