"use client";

import { useKanban } from "../../hooks/useKanban";
import { KanbanCard as KanbanCardType, KanbanColumn as KanbanColumnType } from "../../types/kanban";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, GripVertical, MoreHorizontal, Trash2, Edit2, Check, X } from "lucide-react";
import { useState, useMemo, useRef } from "react";

export function KanbanBoard() {
    const { 
        columns, 
        cards, 
        tags, 
        elementTags, 
        moveCard, 
        isLoaded, 
        addColumn, 
        deleteColumn, 
        updateColumn, 
        addManualCard 
    } = useKanban();
    
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTagId, setSelectedTagId] = useState<string | null>(null);
    const [isAddingColumn, setIsAddingColumn] = useState(false);
    const [newColumnTitle, setNewColumnTitle] = useState("");

    const filteredCards = useMemo(() => {
        return cards.filter(card => {
            const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 card.description?.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTag = !selectedTagId || (elementTags[card.elementRef] || []).includes(selectedTagId);
            return matchesSearch && matchesTag;
        });
    }, [cards, searchQuery, selectedTagId, elementTags]);

    if (!isLoaded) return <div className="flex-grow flex items-center justify-center text-gray-500 font-medium tracking-widest animate-pulse italic">SYNCING CHAINVAS BOARD...</div>;

    return (
        <div className="flex flex-col h-full w-full bg-[#050505] text-white overflow-hidden p-6 md:p-10 relative">
            {/* Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div className="space-y-1">
                    <h1 className="text-5xl font-black tracking-tighter text-white flex items-center gap-4 font-outfit">
                         <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-2xl flex items-center justify-center p-2.5 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                             <div className="w-full h-full bg-white rounded-sm drop-shadow-md" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 30%, 0% 30%, 0% 40%, 100% 40%, 100% 70%, 0% 70%, 0% 80%, 100% 80%, 100% 100%, 0% 100%)' }}></div>
                         </div>
                         Project Board
                    </h1>
                    <p className="text-gray-500 text-lg font-light tracking-wide italic">Organize and track your creative elements across the suite.</p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    {/* Tag Filter */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full sm:max-w-[400px] scrollbar-hide">
                        <button 
                            onClick={() => setSelectedTagId(null)}
                            className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold border transition-all shadow-sm ${!selectedTagId ? "bg-primary text-white border-primary shadow-primary/20" : "bg-white/5 border-white/5 text-gray-500 hover:bg-white/10 hover:text-white"}`}
                        >
                            All
                        </button>
                        {tags.map(tag => (
                            <button 
                                key={tag.id} 
                                onClick={() => setSelectedTagId(tag.id === selectedTagId ? null : tag.id)}
                                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold border transition-all ${selectedTagId === tag.id ? "text-white shadow-lg" : "bg-white/5 border-white/5 text-gray-500 hover:bg-white/10 hover:text-white"}`}
                                style={selectedTagId === tag.id ? { borderColor: tag.color, color: tag.color, backgroundColor: `${tag.color}20`, boxShadow: `0 0 15px ${tag.color}30` } : {}}
                            >
                                {tag.label}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-primary transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search board..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 w-full sm:w-64 transition-all focus:ring-1 focus:ring-primary/20 shadow-inner"
                        />
                    </div>
                </div>
            </header>

            {/* Board */}
            <div className="flex gap-6 overflow-x-auto pb-8 h-[calc(100vh-280px)] items-start scrollbar-hide">
                {columns.sort((a,b) => a.order - b.order).map(column => (
                    <KanbanColumn 
                        key={column.id} 
                        column={column} 
                        cards={filteredCards.filter(c => c.columnId === column.id).sort((a,b) => a.order - b.order)}
                        moveCard={moveCard}
                        deleteColumn={deleteColumn}
                        updateColumn={updateColumn}
                        addManualCard={addManualCard}
                    />
                ))}
                
                {isAddingColumn ? (
                    <div className="w-80 shrink-0 bg-white/[0.03] border border-white/10 rounded-3xl p-4 flex flex-col gap-3 h-fit animate-in fade-in slide-in-from-right-4">
                        <input 
                            autoFocus
                            type="text"
                            placeholder="Column Title..."
                            value={newColumnTitle}
                            onChange={(e) => setNewColumnTitle(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && newColumnTitle) {
                                    addColumn(newColumnTitle);
                                    setIsAddingColumn(false);
                                    setNewColumnTitle("");
                                }
                            }}
                            className="bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary/50"
                        />
                        <div className="flex gap-2">
                            <button 
                                onClick={() => {
                                    if (newColumnTitle) {
                                        addColumn(newColumnTitle);
                                        setIsAddingColumn(false);
                                        setNewColumnTitle("");
                                    }
                                }}
                                className="flex-grow bg-primary px-4 py-2 rounded-xl text-xs font-bold text-white hover:bg-primary/90"
                            >
                                Add
                            </button>
                            <button 
                                onClick={() => setIsAddingColumn(false)}
                                className="px-4 py-2 rounded-xl text-xs font-bold text-gray-500 hover:text-white"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <button 
                        onClick={() => setIsAddingColumn(true)}
                        className="flex items-center gap-2 w-80 shrink-0 h-14 bg-white/[0.02] hover:bg-white/[0.05] border border-dashed border-white/10 rounded-2xl justify-center text-gray-500 hover:text-white transition-all group"
                    >
                        <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                        <span className="text-sm font-medium">Add Column</span>
                    </button>
                )}
            </div>
        </div>
    );
}

function KanbanColumn({ column, cards, moveCard, deleteColumn, updateColumn, addManualCard }: { column: KanbanColumnType, cards: KanbanCardType[], moveCard: any, deleteColumn: any, updateColumn: any, addManualCard: any }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(column.title);
    const [isAddingCard, setIsAddingCard] = useState(false);
    const [newCardTitle, setNewCardTitle] = useState("");
    const [isOver, setIsOver] = useState(false);

    return (
        <div className="flex flex-col w-80 shrink-0 h-full">
            <div className="flex items-center justify-between mb-5 px-1">
                <div className="flex items-center gap-3">
                    {isEditing ? (
                        <div className="flex items-center gap-2">
                            <input 
                                autoFocus
                                type="text"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && editTitle) {
                                        updateColumn(column.id, { title: editTitle });
                                        setIsEditing(false);
                                    }
                                }}
                                className="bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-sm outline-none focus:border-primary/50"
                            />
                            <button onClick={() => { updateColumn(column.id, { title: editTitle }); setIsEditing(false); }} className="text-primary hover:text-primary/80"><Check className="w-4 h-4" /></button>
                        </div>
                    ) : (
                        <h3 className="font-black text-xl text-white tracking-tighter font-outfit uppercase italic">{column.title}</h3>
                    )}
                    <div className="bg-white/10 text-gray-400 text-[10px] font-black px-2 py-0.5 rounded-full border border-white/5 shadow-inner">
                        {cards.length}
                    </div>
                </div>
                
                <div className="relative">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-1.5 rounded-lg hover:bg-white/10 text-gray-500 hover:text-white transition-colors"
                    >
                        <MoreHorizontal className="w-5 h-5" />
                    </button>
                    
                    {isMenuOpen && (
                        <div className="absolute right-0 top-full mt-2 w-48 glass-panel rounded-xl p-1 z-50 animate-in fade-in zoom-in-95">
                            <button 
                                onClick={() => { setIsEditing(true); setIsMenuOpen(false); }}
                                className="flex items-center gap-2 w-full px-3 py-2 text-xs font-medium hover:bg-white/5 rounded-lg transition-colors"
                            >
                                <Edit2 className="w-3.5 h-3.5" /> Rename Column
                            </button>
                            <button 
                                onClick={() => { deleteColumn(column.id); setIsMenuOpen(false); }}
                                className="flex items-center gap-2 w-full px-3 py-2 text-xs font-medium text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                            >
                                <Trash2 className="w-3.5 h-3.5" /> Delete Column
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div 
                className={`flex-grow bg-gradient-to-b from-white/[0.03] to-transparent border rounded-[2rem] p-4 h-full overflow-y-auto scrollbar-hide shadow-2xl relative transition-all duration-300
                    ${isOver ? "border-primary/40 bg-primary/[0.02]" : "border-white/5"}`}
                onDragOver={(e) => {
                    e.preventDefault();
                    setIsOver(true);
                }}
                onDragLeave={() => setIsOver(false)}
                onDrop={(e: any) => {
                    const cardId = e.dataTransfer.getData("cardId");
                    setIsOver(false);
                    if (cardId) moveCard(cardId, column.id, cards.length);
                }}
            >
                <div className="flex flex-col gap-4">
                    <AnimatePresence initial={false} mode="popLayout">
                        {cards.map((card) => (
                            <KanbanCard key={card.id} card={card} />
                        ))}
                    </AnimatePresence>
                    
                    {isAddingCard ? (
                        <div className="flex flex-col gap-2 p-1 animate-in fade-in slide-in-from-top-2">
                            <textarea 
                                autoFocus
                                placeholder="What needs to be done?"
                                value={newCardTitle}
                                onChange={(e) => setNewCardTitle(e.target.value)}
                                className="bg-black/40 border border-white/10 rounded-2xl p-4 text-sm outline-none focus:border-primary/50 resize-none h-24"
                            />
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => {
                                        if (newCardTitle) {
                                            addManualCard(column.id, newCardTitle);
                                            setIsAddingCard(false);
                                            setNewCardTitle("");
                                        }
                                    }}
                                    className="flex-grow bg-primary px-4 py-2 rounded-xl text-xs font-bold text-white shadow-[0_0_20px_rgba(249,115,22,0.2)]"
                                >
                                    Add Task
                                </button>
                                <button onClick={() => setIsAddingCard(false)} className="px-4 py-2 rounded-xl text-xs font-bold text-gray-500 hover:text-white"><X className="w-4 h-4" /></button>
                            </div>
                        </div>
                    ) : (
                        <button 
                            onClick={() => setIsAddingCard(true)}
                            className="flex items-center gap-2 py-3 rounded-2xl hover:bg-white/5 text-gray-500 hover:text-gray-300 transition-all border border-transparent hover:border-white/5 group"
                        >
                            <Plus className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-bold uppercase tracking-widest">New Task</span>
                        </button>
                    )}

                    {cards.length === 0 && !isAddingCard && (
                        <div className="flex flex-col items-center justify-center py-20 text-center opacity-30">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 border border-white/5">
                                <Plus className="w-8 h-8 text-gray-600" />
                            </div>
                            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Drop items here</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function KanbanCard({ card }: { card: KanbanCardType }) {
    const { tags, elementTags, removeCard } = useKanban();
    const [isDragging, setIsDragging] = useState(false);

    const cardTags = useMemo(() => {
        const tagIds = elementTags[card.elementRef] || [];
        return tags.filter(t => tagIds.includes(t.id));
    }, [tags, elementTags, card.elementRef]);

    const typeLabel = card.elementRef.split(":")[0];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            draggable
            onDragStart={(e: any) => {
                if (e.dataTransfer) {
                    e.dataTransfer.setData("cardId", card.id);
                    e.dataTransfer.effectAllowed = "move";
                    setIsDragging(true);
                }
            }}
            onDragEnd={() => setIsDragging(false)}
            className={`group glass-panel p-5 rounded-[1.5rem] border transition-all duration-300 relative
                ${isDragging ? "opacity-40 scale-105 border-primary/50 shadow-2xl shadow-primary/20 rotate-1" : "hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"}
                ${typeLabel === 'TEXT' ? 'border-l-4 border-l-primary/40' : typeLabel === 'PHOTO' ? 'border-l-4 border-l-secondary/40' : 'border-l-4 border-l-purple-500/40'}`}
        >
            <div className="absolute top-4 right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                    onClick={() => removeCard(card.id)}
                    className="p-1.5 rounded-lg hover:bg-red-500/10 text-gray-500 hover:text-red-400 transition-colors"
                >
                    <Trash2 className="w-3.5 h-3.5" />
                </button>
                <div className="p-1.5 rounded-lg hover:bg-white/10 text-gray-500 hover:text-white cursor-grab active:cursor-grabbing">
                    <GripVertical className="w-4 h-4" />
                </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
                <span className={`text-[8px] font-black tracking-[0.15em] uppercase px-2 py-0.5 rounded-full border border-white/5 bg-white/5
                    ${typeLabel === 'TEXT' ? 'text-primary' : typeLabel === 'PHOTO' ? 'text-secondary' : 'text-purple-400'}`}>
                    {typeLabel}
                </span>
            </div>

            <h4 className="font-bold text-base text-white/90 mb-2 leading-tight group-hover:text-primary transition-colors pr-12 font-outfit uppercase italic tracking-tighter">
                {card.title}
            </h4>
            
            {card.description && (
                <p className="text-[11px] text-gray-500 line-clamp-2 mb-4 leading-relaxed font-medium italic opacity-60">
                    {card.description}
                </p>
            )}

            <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                {cardTags.length > 0 ? (
                    cardTags.map(tag => (
                        <div 
                            key={tag.id}
                            className="flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider"
                            style={{ backgroundColor: `${tag.color}15`, color: tag.color, border: `1px solid ${tag.color}20` }}
                        >
                            <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_5px_currentColor]" style={{ backgroundColor: tag.color }} />
                            {tag.label}
                        </div>
                    ))
                ) : (
                    <div className="text-[9px] text-gray-600 font-bold uppercase tracking-widest opacity-30">Untracked</div>
                )}
            </div>
        </motion.div>
    );
}
