"use client";

import { KanbanBoard } from "@/components/shared/KanbanBoard";

export default function KanbanPage() {
    return (
        <main className="flex-grow flex flex-col h-[calc(100vh-80px)]">
            <KanbanBoard />
        </main>
    );
}
