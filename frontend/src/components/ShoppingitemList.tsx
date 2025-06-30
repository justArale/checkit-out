import React from "react";
import type { ShoppingItemType } from "../interfaces/shoppingItem.interface";
import ShoppingItemCard from "./ShoppingItemCard";

interface Props {
  items: ShoppingItemType[];
  onItemChanged: () => void;
}
const ShoppingItemList: React.FC<Props> = ({ items, onItemChanged }) => {
  if (items.length === 0) {
    return <div>Your list is empty</div>;
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item._id}>
          <ShoppingItemCard item={item} onItemChanged={onItemChanged} />
        </div>
      ))}
    </div>
  );
};

export default ShoppingItemList;
