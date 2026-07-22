import type React from "react";

type SearchProp = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onSelectCategory: (category: string) => void;
    categories: string[];
    category: string;
}

function Search({ value, onChange, onKeyDown, onSelectCategory, categories,category }: SearchProp) {
    return (
        <div className="container mx-auto">
            <div className="flex gap-3 items-center bg-background p-5 border border-border rounded-xl">
                <div className="flex-1 h-10 relative">
                    <input type="text" placeholder='ค้นหาหลักสูตร' value={value} onChange={onChange} onKeyDown={onKeyDown} className="w-full h-full border border-border rounded-md px-10 text-muted bg-surface" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-muted absolute left-3 top-1/2 -translate-y-1/2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <div>
                    <div className="dropdown w-auto">
                        <div tabIndex={0} role="button" className="h-10 flex items-center px-10 rounded-md border border-border text-text bg-surface cursor-pointer hover:bg-white/10">หมวดหมู่ :  {category === "All" ? "ทั้งหมด" : category}</div>
                        <ul tabIndex={-1} className="dropdown-content menu bg-surface text-text rounded-box z-1 w-full p-2 shadow-sm">
                            <button onClick={() => onSelectCategory("All")} className="w-full menu cursor-pointer hover:bg-white/10">ทั้งหมด</button>
                            {categories.map((category) => (
                                <button onClick={() => onSelectCategory(category)} className="w-full menu cursor-pointer hover:bg-white/10">{category}</button>
                            ))}
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Search