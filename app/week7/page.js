"use client"
import React, { useState } from "react";
import Link from 'next/link';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js';
import itemsData from './items.json';

const Page = () => {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    const handleItemSelect = (selectedItem) => {
        const cleanedItemName = selectedItem.name
            .split(',')[0]
            .trim()
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
        setSelectedItemName(cleanedItemName);
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2">
            <h3 className="mb-8 text-center font-bold">Shopping List</h3>

            <div className="flex w-full justify-between px-16"> {/* Main content area */}
                <div className="flex flex-col w-1/2 space-y-4"> {/* Left section */}
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>

                <div className="w-1/2"> {/* Right section */}
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
            
            <Link href="/" className="mt-8">Home</Link>
        </main>
    );
}

export default Page;
