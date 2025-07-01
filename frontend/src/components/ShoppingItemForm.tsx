import React from "react";
import { useState } from "react";
import { createShoppingItem } from "../services/shoppingItem.service";
import Add from "./icons/Add";

interface Props {
  onItemAdded: () => void;
}

const ShoppingItemForm: React.FC<Props> = ({ onItemAdded }) => {
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
      .then(() => {
        onItemAdded(); // Call the callback to refresh the item list
      })
      .catch((error) => {
        console.error("Error creating item:", error);
      });
    console.log("Item submitted:", itemName);
    setItemName(""); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit} className="inputFormContainer">
      <div className="inputFormWrapper">
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Add new item"
          required
          className="inputForm bodyfontRegular"
        />
      </div>
      {itemName.trim() !== "" && (
        <button type="submit" className="addButton">
          <Add className="addIcon" />
        </button>
      )}
    </form>
  );
};

export default ShoppingItemForm;
