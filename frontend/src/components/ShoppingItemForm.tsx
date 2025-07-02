import React from "react";
import { useState } from "react";
import { createShoppingItem } from "../services/shoppingItem.service";
import Add from "./icons/Add";

interface Props {
  onItemAdded: () => void;
  isLoading: boolean;
}

const ShoppingItemForm: React.FC<Props> = ({ onItemAdded, isLoading }) => {
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
          enterKeyHint="send"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder={isLoading ? "Loading..." : "Add new item"}
          required
          className={`inputForm bodyfontRegular${
            isLoading ? " isLoading" : ""
          }`}
        />
      </div>

      <button
        type="submit"
        className={`addButton ${
          itemName.trim() !== "" ? "addButtonEnabled" : "addButtonDisabled"
        }`}
      >
        <Add className="addIcon" />
      </button>
    </form>
  );
};

export default ShoppingItemForm;
