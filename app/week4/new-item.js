"use client";

import { useState } from "react";

    const NewItem = (){ 
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [itemCreated, setItemCreated] = useState(false);

    const handleSubmit=(event) => {
        event.preventDefault();
        const item = {name, quantity, category};
        console.log(item);
        alert('Item: ${name} ${quantity} ${category} created!');
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                    required
                    />
                    </div>

                    <div>
                        <label htmlFor="category">Category:</label>
                        <select id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="meat">Meat</option>
                            <option value="frozen">Frozen</option>
                            <option value="dairy">Dairy</option>
                            <option value="canned">Canned</option>
                            <option value="dry">Dry</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button type="submit">Add Item</button>
                    </form>
    );      
    
};


export default NewItem;


