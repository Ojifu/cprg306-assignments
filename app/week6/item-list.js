"use client";

import React, { useState } from "react";
import Item from "./item.js";
import Link from 'next/link';

const ItemList = ({items}) => {
  const [sortBy, setSortBy] = useState("name");

  
  const buttonStyle ={
    marginRight: '10px'
  }
  const itemsData = [
    {
      "id": "1h2GJKH12gkHG31h1H",
      "name": "milk, 4 L 🥛",
      "quantity": 1,
      "category": "dairy"
    },
    {
      "id": "2KJH3k2j3H1k2J3K1H",
      "name": "bread 🍞",
      "quantity": 2,
      "category": "bakery"
    },
    {
      "id": "3h2KJH3k2j3H1k2J3",
      "name": "eggs, dozen 🥚",
      "quantity": 2,
      "category": "dairy"
    },
    {
      "id": "4k2J3K1H2GJKH12gk",
      "name": "bananas 🍌",
      "quantity": 6,
      "category": "produce"
    },
    {
      "id": "5H1h1H2KJH3k2j3H",
      "name": "broccoli 🥦",
      "quantity": 3,
      "category": "produce"
    },
    {
      "id": "6H1k2J3K1H2GJKH1",
      "name": "chicken breasts, 1 kg 🍗",
      "quantity": 1,
      "category": "meat"
    },
    {
      "id": "7gkHG31h1H2KJH3k",
      "name": "pasta sauce 🍝",
      "quantity": 3,
      "category": "canned goods"
    },
    {
      "id": "8j3H1k2J3K1H2GJK",
      "name": "spaghetti, 454 g 🍝",
      "quantity": 2,
      "category": "dry goods"
    },
    {
      "id": "9H12gkHG31h1H2KJ",
      "name": "toilet paper, 12 pack 🧻",
      "quantity": 1,
      "category": "household"
    },
    {
      "id": "10H3k2j3H1k2J3K1",
      "name": "paper towels, 6 pack",
      "quantity": 1,
      "category": "household"
    },
    {
      "id": "11k2J3K1H2GJKH12",
      "name": "dish soap 🍽️",
      "quantity": 1,
      "category": "household"
    },
    {
      "id": "12GJKH12gkHG31h1",
      "name": "hand soap 🧼",
      "quantity": 4,
      "category": "household"
    }
  ];

  let sortedItems = [...itemsData];
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
