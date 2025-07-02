import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import type { ShoppingItemType } from "../interfaces/shoppingItem.interface";
import {
  deleteShoppingItem,
  updateShoppingItem,
} from "../services/shoppingItem.service";
import Delete from "./icons/Delete";
import Checked from "./icons/Checked";
import Check from "./icons/Check";
import Uncheck from "./icons/Uncheck";

interface Props {
  item: ShoppingItemType;
  onItemChanged: () => void;
}

const ShoppingItemCard: React.FC<Props> = ({ item, onItemChanged }) => {
  const [deltaX, setDeltaX] = useState(0);

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

  // Handler for swipe feature
  const handlers = useSwipeable({
    onSwiping: ({ deltaX }: { deltaX: number }) => {
      // Limit to max ±100px, feels smoother
      setDeltaX(Math.max(-100, Math.min(100, deltaX)));
    },
    onSwiped: ({ dir }: { dir: string }) => {
      if (dir === "Left" && deltaX < -30) {
        // Delete the item on swipe left
        handleDelete(item._id);
      } else if (dir === "Right" && deltaX > 30) {
        // Toggle bought status on swipe right
        handleToggleBought(item);
      }
      setDeltaX(0);
    },

    delta: parseInt(import.meta.env.VITE_DELTA || "30"), // Threshold for swipe detection, 30 is ideal for mobile
    //Swipe with the mouse
    trackMouse: true,
  });

  return (
    <div className="swipeWrapper">
      <div className="swipeBackground">
        <div className="swipeLabel">
          {item.bought ? (
            <Uncheck className="checkIcon" />
          ) : (
            <Check className="checkIcon" />
          )}

          <span className="labelfontMedium">
            {item.bought ? "undone" : "done"}
          </span>
        </div>
        <div className="swipeLabel">
          <Delete className="deleteIconReverse" />
          <span className="labelfontMedium">delete</span>
        </div>
      </div>
      <div
        {...handlers}
        className="shoppingItemCard"
        style={{
          transform: `translateX(${deltaX}px)`,
          transition: deltaX === 0 ? "transform 0.3s ease-out" : "none",
        }}
      >
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
    </div>
  );
};

export default ShoppingItemCard;
