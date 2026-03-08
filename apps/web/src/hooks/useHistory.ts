"use client";

import { useState, useCallback, useMemo } from "react";

export function useHistory<T>(initialState: T) {
    const [index, setIndex] = useState(0);
    const [history, setHistory] = useState<T[]>([initialState]);

    const state = useMemo(() => history[index], [history, index]);

    const setState = useCallback((nextState: T | ((prev: T) => T)) => {
        setHistory(prevHistory => {
            const current = prevHistory[index];
            const next = typeof nextState === "function"
                ? (nextState as (prev: T) => T)(current)
                : nextState;

            // If the state hasn't changed, don't add to history
            if (JSON.stringify(next) === JSON.stringify(current)) {
                return prevHistory;
            }

            const newHistory = prevHistory.slice(0, index + 1);
            newHistory.push(next);

            // Limit history size to 50
            if (newHistory.length > 50) {
                newHistory.shift();
                setIndex(newHistory.length - 1);
            } else {
                setIndex(newHistory.length - 1);
            }

            return newHistory;
        });
    }, [index]);

    const undo = useCallback(() => {
        if (index > 0) {
            setIndex(prev => prev - 1);
        }
    }, [index]);

    const redo = useCallback(() => {
        if (index < history.length - 1) {
            setIndex(prev => prev + 1);
        }
    }, [index, history.length]);

    const canUndo = index > 0;
    const canRedo = index < history.length - 1;

    return [state, setState, { undo, redo, canUndo, canRedo }] as const;
}
