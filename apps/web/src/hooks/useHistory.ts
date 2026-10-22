"use client";

import { useState, useCallback, useRef, useMemo } from "react";

export interface SetStateOptions {
    /**
     * Mark the update as part of a continuous gesture (drag, slider scrub…).
     * The first transient update pushes one history entry; every following
     * transient update replaces that entry instead of pushing another one, so
     * a single drag produces a single undo step. Any non-transient update (or
     * a call to `commit()`) ends the gesture.
     */
    transient?: boolean;
}

interface HistoryState<T> {
    entries: T[];
    index: number;
}

const MAX_HISTORY = 100;

/**
 * Undo/redo-able state.
 *
 * All bookkeeping happens inside a single functional `setState` call so that
 * several updates issued in the same tick (e.g. importing five files in one
 * loop) are all applied – the previous implementation captured `index` in a
 * closure and silently discarded all but the last update.
 */
export function useHistory<T>(initialState: T) {
    const [{ entries, index }, setHistory] = useState<HistoryState<T>>({
        entries: [initialState],
        index: 0,
    });
    const inGesture = useRef(false);

    const state = entries[index];

    const setState = useCallback((nextState: T | ((prev: T) => T), options?: SetStateOptions) => {
        const transient = options?.transient ?? false;
        setHistory((prev) => {
            const current = prev.entries[prev.index];
            const next = typeof nextState === "function"
                ? (nextState as (prev: T) => T)(current)
                : nextState;

            if (Object.is(next, current) || JSON.stringify(next) === JSON.stringify(current)) {
                return prev;
            }

            // Replace the top entry while a gesture is in progress.
            if (transient && inGesture.current) {
                const replaced = prev.entries.slice(0, prev.index + 1);
                replaced[prev.index] = next;
                return { entries: replaced, index: prev.index };
            }

            inGesture.current = transient;

            const newEntries = prev.entries.slice(0, prev.index + 1);
            newEntries.push(next);
            if (newEntries.length > MAX_HISTORY) newEntries.shift();
            return { entries: newEntries, index: newEntries.length - 1 };
        });
    }, []);

    /** End the current gesture so the next update creates a fresh undo step. */
    const commit = useCallback(() => {
        inGesture.current = false;
    }, []);

    const undo = useCallback(() => {
        inGesture.current = false;
        setHistory((prev) => (prev.index > 0 ? { ...prev, index: prev.index - 1 } : prev));
    }, []);

    const redo = useCallback(() => {
        inGesture.current = false;
        setHistory((prev) => (prev.index < prev.entries.length - 1 ? { ...prev, index: prev.index + 1 } : prev));
    }, []);

    /** Replace the whole history (used when opening a project / receiving remote state). */
    const reset = useCallback((value: T) => {
        inGesture.current = false;
        setHistory({ entries: [value], index: 0 });
    }, []);

    const canUndo = index > 0;
    const canRedo = index < entries.length - 1;

    const controls = useMemo(
        () => ({ undo, redo, commit, reset, canUndo, canRedo }),
        [undo, redo, commit, reset, canUndo, canRedo],
    );

    return [state, setState, controls] as const;
}
