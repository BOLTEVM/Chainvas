"use client";

import { useKanban } from "../../hooks/useKanban";
import { Tag } from "../../types/kanban";
import { Plus, X, Tag as TagIcon, Check } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TagManagerProps {
    elementRef: string;
}

export function TagManager({ elementRef }: TagManagerProps) {
    const { tags, elementTags, toggleTagOnElement, addTag } = useKanban();
    const [isAdding, setIsAdding] = useState(false);
    const [newTagLabel, setNewTagLabel] = useState("");
    const [newTagColor, setNewTagColor] = useState("#3b82f6");

    const selectedTagIds = elementTags[elementRef] || [];

    const handleAddTag = () => {
        if (newTagLabel.trim()) {
            addTag(newTagLabel.trim(), newTagColor);
            setNewTagLabel("");
            setIsAdding(false);
        }
    };

    return (
        <div className="flex flex-col gap-3 p-4 glass-panel rounded-xl border border-white/10 w-64">
            <div className="flex items-center gap-2 mb-1">
                <TagIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-white">Manage Tags</span>
            </div>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => {
                    const isSelected = selectedTagIds.includes(tag.id);
                    return (
                        <button
                            key={tag.id}
                            onClick={() => toggleTagOnElement(elementRef, tag.id)}
                            className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all
                                ${isSelected 
                                    ? "bg-white/20 border-white/20 text-white" 
                                    : "bg-white/5 border-transparent text-gray-400 hover:bg-white/10 hover:text-white"
                                } border`}
                            style={isSelected ? { borderColor: tag.color, backgroundColor: `${tag.color}20` } : {}}
                        >
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: tag.color }} />
                            {tag.label}
                            {isSelected && <Check className="w-3 h-3" />}
                        </button>
                    );
                })}
            </div>

            <div className="mt-2 border-t border-white/5 pt-3">
                {isAdding ? (
                    <motion.div 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-2"
                    >
                        <input
                            type="text"
                            placeholder="Tag name..."
                            value={newTagLabel}
                            onChange={(e) => setNewTagLabel(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50"
                            autoFocus
                        />
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex gap-1.5">
                                {["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899"].map(color => (
                                    <button
                                        key={color}
                                        onClick={() => setNewTagColor(color)}
                                        className={`w-4 h-4 rounded-full transition-transform ${newTagColor === color ? "scale-125 ring-1 ring-white" : "hover:scale-110"}`}
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                            <div className="flex gap-1">
                                <button
                                    onClick={() => setIsAdding(false)}
                                    className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                                <button
                                    onClick={handleAddTag}
                                    className="p-1.5 rounded-lg bg-primary/20 text-primary hover:bg-primary/30"
                                >
                                    <Check className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <button
                        onClick={() => setIsAdding(true)}
                        className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
                    >
                        <Plus className="w-3.5 h-3.5" />
                        Create New Tag
                    </button>
                )}
            </div>
        </div>
    );
}
