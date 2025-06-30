import React from "react";
import { useState, useEffect } from "react";
import { getAllShoppingItems } from "../services/shoppingItem.service";
import type { ShoppingItemType } from "../services/shoppingItem.service";

const ShoppingItemList: React.FC = () => {
  const [items, setItems] = useState<ShoppingItemType[]>([]);

  useEffect(() => {
    getAllShoppingItems()
      .then((data) => setItems(data.items))
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  if (items.length === 0) {
    return <div>Your list is empty</div>;
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item._id}>{item.name}</div>
      ))}
    </div>
  );
};

export default ShoppingItemList;
