import React from "react";
import { useState } from "react";
import { createShoppingItem } from "../services/shoppingItem.service";

const ShoppingItemForm: React.FC = () => {
  const [itemName, setItemName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (itemName.trim() === "") {
      return;
    }
    const newItem = {
      name: itemName,
    };
    createShoppingItem(newItem)
      .then(() => {
        console.log("Item created successfully");
      })
      .catch((error) => {
        console.error("Error creating item:", error);
      });
    console.log("Item submitted:", itemName);
    setItemName(""); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Add new item"
          required
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default ShoppingItemForm;
