"use client";

import React, { useState } from "react";
import Link from 'next/link';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js'; // Importing the MealIdeas component
import itemsData from './items.json';

const Page = () => {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");  // New state variable for selected item name

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
            <h3 className="flex flex-col items-center justify-center flex-1 px-20 text-center"><b>Shopping List</b></h3>

            <div className="flex">  {/* Flex container to group NewItem and ItemList on one side */}
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Passing the onItemSelect prop */}
            </div>

            <MealIdeas ingredient={selectedItemName} />  {/* Passing selectedItemName as ingredient prop */}
            
            <Link href="/" className="flex flex-col items-center justify-center flex-1 px-20 text-center">Home</Link>
        </main>
    );
}

export default Page;
// Path: app/week7/new-item.js
