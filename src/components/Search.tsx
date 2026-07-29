import type React from "react";
import { useState } from "react";

type SearchProp = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onSelectCategory: (category: string) => void;
    categories: string[];
    category: string;
}

function Search({ value, onChange, onKeyDown, onSelectCategory, categories, category }: SearchProp) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="container mx-auto px-3">
            <div className="flex gap-2 lg:gap-3 items-center bg-background p-3 lg:p-5 border border-border rounded-lg lg:rounded-xl">
                <div className="flex-1 h-10 relative">
                    <input type="text" placeholder='ค้นหาหลักสูตร' value={value} onChange={onChange} onKeyDown={onKeyDown} className="w-full h-full border border-border rounded-md px-10 text-muted text-xs lg:text-base bg-surface" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-muted absolute left-3 top-1/2 -translate-y-1/2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <div>
                    <div className="relative w-auto">
                        <div onClick={()=> setIsOpen(!isOpen)} tabIndex={0} role="button" className="min-w-30 h-10 flex gap-2 items-center px-3 lg:px-10 rounded-md border border-border text-text text-xs lg:text-base bg-surface cursor-pointer hover:bg-white/10">
                            <div className="hidden lg:flex">หมวดหมู่ : </div>
                            <span>{category === "All" ? "ทั้งหมด" : category}</span>
                        </div>
                        {isOpen && (
                            <ul tabIndex={-1} className="absolute mt-2 bg-surface text-text border border-border rounded-box z-1 w-full p-2 shadow-sm">
                            <button onClick={() => { onSelectCategory("All"); setIsOpen(false) }} className="w-full menu cursor-pointer hover:bg-white/10 text-xs lg:text-base">ทั้งหมด</button>
                            {categories.map((category) => (
                                <button onClick={() => {onSelectCategory(category); setIsOpen(false)}} className="w-full menu cursor-pointer hover:bg-white/10 text-xs lg:text-base">{category}</button>
                            ))}
                        </ul>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Search