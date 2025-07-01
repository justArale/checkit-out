import React from "react";
import type { ShoppingItemType } from "../interfaces/shoppingItem.interface";
import {
  deleteShoppingItem,
  updateShoppingItem,
} from "../services/shoppingItem.service";
import Delete from "./icons/Delete";
import Checked from "./icons/Checked";

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
    <div className="shoppingItemCard">
      <button
        className={`checkbox ${item.bought ? "checked" : ""}`}
        onClick={() => handleToggleBought(item)}
        aria-label="Toggle bought"
      >
        {item.bought && <Checked className="checkedIcon" />}
      </button>

      <p
        className={`itemName ${
          item.bought
            ? "bodyfontRegular checked secondaryFontColor"
            : "bodyfontMedium"
        }`}
      >
        {item.name}
      </p>
      <button onClick={() => handleDelete(item._id)} className="deleteButton">
        <Delete className="deleteIcon" />
      </button>
    </div>
  );
};

export default ShoppingItemCard;
