"use client";

import React, { useState } from "react";
import Link from 'next/link';
import ItemList from './item-list.js';
import NewItem from './new-item.js'; // Importing the NewItem component
import itemsData from './items.json';

const Page = () => {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2">
            <h3 className="flex flex-col items-center justify-center flex-1 px-20 text-center"><b>Shopping List</b></h3>
            
            <NewItem onAddItem={handleAddItem} />  {/* Displaying the NewItem component and passing the handleAddItem function as a prop */}
            <ItemList items={items} />  {/* Passing the items state to the ItemList component as a prop */}
            
            <Link href="/" className="flex flex-col items-center justify-center flex-1 px-20 text-center">Home</Link>
        </main>
    );
}

export default Page;
