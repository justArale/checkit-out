import React from "react";
import type { ShoppingItemType } from "../services/shoppingItem.service";
import {
  deleteShoppingItem,
  updateShoppingItem,
} from "../services/shoppingItem.service";

interface Props {
  item: ShoppingItemType;
  onItemChanged: () => void;
}

const ShoppingItemCard: React.FC<Props> = ({ item, onItemChanged }) => {
  const handleDelete = (id: string) => {
    deleteShoppingItem(id)
      .then(onItemChanged)
      .catch((err) => console.error("Delete failed:", err));
  };

  const handleToggleBought = (item: ShoppingItemType) => {
    updateShoppingItem(item._id, { bought: !item.bought })
      .then(onItemChanged)
      .catch((err) => console.error("Update failed:", err));
  };

  return (
    <div>
      <p>{item.name}</p>
      <p>{item.bought ? "bought" : "not bought"}</p>
      <button onClick={() => handleToggleBought(item)}>
        {item.bought ? "Unmark as Bought" : "Mark as Bought"}
      </button>
      <button onClick={() => handleDelete(item._id)}>Delete</button>
    </div>
  );
};

export default ShoppingItemCard;
