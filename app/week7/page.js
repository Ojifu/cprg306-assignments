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
        <main className="flex flex-col items-center justify-center min-h-screen py-2 px-16">
            <h1 className="text-3xl font-bold mb-8">Shopping List</h1>

            <div className="flex w-full space-x-8"> {/* Main content area */}
                <div className="flex flex-col w-1/2 space-y-4"> {/* Left section */}
                    <NewItem onAddItem={handleAddItem} />
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-4">
                            <button className="bg-orange-500 px-4 py-2 text-white rounded">Name</button>
                            <button className="bg-gray-300 px-4 py-2 text-black rounded">Category</button>
                        </div>
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>
                </div>

                <div className="flex flex-col w-1/2 space-y-4 border-l pl-8"> {/* Right section */}
                    <h2 className="text-2xl font-bold">Meal Ideas</h2>
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>

            <Link href="/" className="mt-8">Home</Link>
        </main>
    );
}

export default Page;
