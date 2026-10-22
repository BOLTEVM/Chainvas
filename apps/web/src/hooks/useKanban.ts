"use client";

import { useState, useEffect, useCallback } from "react";
import { Tag, KanbanCard, KanbanColumn, KanbanState } from "@/types/kanban";

const DEFAULT_COLUMNS: KanbanColumn[] = [
    { id: "todo", title: "To Do", order: 0 },
    { id: "in-progress", title: "In Progress", order: 1 },
    { id: "done", title: "Done", order: 2 },
];

const DEFAULT_TAGS: Tag[] = [
    { id: "t1", label: "Urgent", color: "#ef4444" },
    { id: "t2", label: "Review", color: "#f59e0b" },
    { id: "t3", label: "Draft", color: "#3b82f6" },
    { id: "t4", label: "Final", color: "#10b981" },
];

export function useKanban() {
    const [state, setState] = useState<KanbanState>({
        columns: DEFAULT_COLUMNS,
        cards: [],
        tags: DEFAULT_TAGS,
        elementTags: {},
    });
    const [isLoaded, setIsLoaded] = useState(false);

    // Hydrate from localStorage after mount. This must stay in an effect (not a
    // lazy initializer) so server and first client render match; `isLoaded`
    // gates the UI until the stored board has been applied.
    useEffect(() => {
        const saved = localStorage.getItem("bolt_kanban_state");
        if (saved) {
            try {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setState(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load Kanban state", e);
            }
        }
        setIsLoaded(true);
    }, []);

    const saveState = (newState: KanbanState) => {
        setState(newState);
        localStorage.setItem("bolt_kanban_state", JSON.stringify(newState));
    };

    const addTag = useCallback((label: string, color: string) => {
        const newTag: Tag = {
            id: `tag_${Date.now()}`,
            label,
            color,
        };
        const newState = { ...state, tags: [...state.tags, newTag] };
        saveState(newState);
    }, [state]);

    const toggleTagOnElement = useCallback((elementRef: string, tagId: string) => {
        const currentTags = state.elementTags[elementRef] || [];
        const newTags = currentTags.includes(tagId)
            ? currentTags.filter(id => id !== tagId)
            : [...currentTags, tagId];
        
        const newState = {
            ...state,
            elementTags: {
                ...state.elementTags,
                [elementRef]: newTags,
            },
        };
        saveState(newState);
    }, [state]);

    const addToKanban = useCallback((elementRef: string, title: string, description?: string) => {
        if (state.cards.find(c => c.elementRef === elementRef)) return;

        const newCard: KanbanCard = {
            id: `card_${Date.now()}`,
            elementRef,
            columnId: "todo",
            order: state.cards.filter(c => c.columnId === "todo").length,
            title,
            description,
        };

        saveState({ ...state, cards: [...state.cards, newCard] });
    }, [state]);

    const addManualCard = useCallback((columnId: string, title: string, description?: string) => {
        const newCard: KanbanCard = {
            id: `card_${Date.now()}`,
            elementRef: `manual:${Date.now()}`,
            columnId,
            order: state.cards.filter(c => c.columnId === columnId).length,
            title,
            description,
        };
        saveState({ ...state, cards: [...state.cards, newCard] });
    }, [state]);

    const updateCard = useCallback((cardId: string, updates: Partial<KanbanCard>) => {
        const newState = {
            ...state,
            cards: state.cards.map(c => c.id === cardId ? { ...c, ...updates } : c),
        };
        saveState(newState);
    }, [state]);

    const moveCard = useCallback((cardId: string, targetColumnId: string, newIndex: number) => {
        const cardToMove = state.cards.find(c => c.id === cardId);
        if (!cardToMove) return;

        // 1. Remove card from old position logic (and filter it out temporarily)
        const otherCards = state.cards.filter(c => c.id !== cardId);
        
        // 2. Adjust target column's card orders
        const targetColumnCards = otherCards
            .filter(c => c.columnId === targetColumnId)
            .sort((a,b) => a.order - b.order);
        
        targetColumnCards.splice(newIndex, 0, { ...cardToMove, columnId: targetColumnId });

        // Re-assign orders
        const updatedTargetCards = targetColumnCards.map((c, i) => ({ ...c, order: i }));
        
        // 3. Adjust source column's card orders (if different)
        let finalCards = otherCards.filter(c => c.columnId !== targetColumnId);
        if (cardToMove.columnId !== targetColumnId) {
            const sourceColumnCards = otherCards
                .filter(c => c.columnId === cardToMove.columnId)
                .sort((a,b) => a.order - b.order)
                .map((c, i) => ({ ...c, order: i }));
            
            finalCards = finalCards.filter(c => c.columnId !== cardToMove.columnId).concat(sourceColumnCards);
        }

        const newState = {
            ...state,
            cards: finalCards.concat(updatedTargetCards),
        };
        saveState(newState);
    }, [state]);

    const removeCard = useCallback((cardId: string) => {
        const newState = {
            ...state,
            cards: state.cards.filter(c => c.id !== cardId),
        };
        saveState(newState);
    }, [state]);

    const addColumn = useCallback((title: string) => {
        const newColumn: KanbanColumn = {
            id: `col_${Date.now()}`,
            title,
            order: state.columns.length,
        };
        saveState({ ...state, columns: [...state.columns, newColumn] });
    }, [state]);

    const updateColumn = useCallback((columnId: string, updates: Partial<KanbanColumn>) => {
        const newState = {
            ...state,
            columns: state.columns.map(c => c.id === columnId ? { ...c, ...updates } : c),
        };
        saveState(newState);
    }, [state]);

    const deleteColumn = useCallback((columnId: string) => {
        if (state.columns.length <= 1) return; // Must have at least one column
        const newState = {
            ...state,
            columns: state.columns.filter(c => c.id !== columnId),
            cards: state.cards.filter(c => c.columnId !== columnId),
        };
        saveState(newState);
    }, [state]);

    return {
        ...state,
        isLoaded,
        addTag,
        toggleTagOnElement,
        addToKanban,
        addManualCard,
        updateCard,
        moveCard,
        removeCard,
        addColumn,
        updateColumn,
        deleteColumn,
    };
}
