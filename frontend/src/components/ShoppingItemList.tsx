import React from "react";
import type { ShoppingItemType } from "../interfaces/shoppingItem.interface";
import ShoppingItemCard from "./ShoppingItemCard";
import EmptyList from "./icons/EmptyList";

interface Props {
  items: ShoppingItemType[];
  onItemChanged: () => void;
}
const ShoppingItemList: React.FC<Props> = ({ items, onItemChanged }) => {
  if (items.length === 0) {
    return (
      <div className="shoppingItemListEmpty">
        <EmptyList className="emptyListIcon" />
        <p className="bodyfontMedium secondaryFontColor">Your list is empty</p>
      </div>
    );
  }

  return (
    <div className="shoppingItemList">
      {items.map((item) => (
        <div key={item._id} className="shoppingItemCardContainer">
          <ShoppingItemCard item={item} onItemChanged={onItemChanged} />
        </div>
      ))}
    </div>
  );
};

export default ShoppingItemList;
