"use client";
import React, { useState } from "react";
import Item from "./item.js";
import Link from 'next/link';

const ItemList = ({ items }) => {  // Receive the items prop
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
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ItemList;
