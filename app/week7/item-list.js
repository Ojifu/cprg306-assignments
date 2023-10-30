"use client";
import React, { useState } from "react";
import Item from "./item.js";
import Link from 'next/link';

const ItemList = ({ items, onItemSelect }) => {  // Receive the items and onItemSelect props
  const [sortBy, setSortBy] = useState("name");

  const buttonStyle = {
    marginRight: '10px'
  }

  // We'll operate on a copy of the items prop to ensure immutability.
  let sortedItems = [...items];
  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  const handleItemSelect = (itemName) => {
    // Trigger the onItemSelect function with the respective item as an argument
    const selectedItem = items.find(item => item.name === itemName);
    if (selectedItem) {
      onItemSelect(selectedItem);
    }
  }

  return (
    <div>
      <button 
        onClick={() => setSortBy("name")} 
        style={{ 
          backgroundColor: sortBy === "name" ? 'lightblue' : 'white',
          ...buttonStyle
        }}
      >
        Sort by Name
      </button>
      <button 
        onClick={() => setSortBy("category")} 
        style={{ backgroundColor: sortBy === "category" ? 'lightblue' : 'white' }}
      >
        Sort by Category
      </button>
      {sortedItems.map(item => (
        <Item key={item.id} {...item} onSelect={handleItemSelect} />
      ))}
    </div>
  );
}

export default ItemList;
