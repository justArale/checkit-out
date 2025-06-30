import React from "react";
import { useState, useEffect } from "react";
import { getAllShoppingItems } from "../services/shoppingItem.service";
import type { ShoppingItemType } from "../interfaces/shoppingItem.interface";
import ShoppingItemForm from "../components/ShoppingItemForm";
import ShoppingItemList from "../components/ShoppingItemList";

const DashboradPage: React.FC = () => {
  const [items, setItems] = useState<ShoppingItemType[]>([]);

  const fetchItems = () => {
    getAllShoppingItems()
      .then((data) => setItems(data.items))
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="componentBox">
      <ShoppingItemForm onItemAdded={fetchItems} />
      <ShoppingItemList items={items} onItemChanged={fetchItems} />
    </div>
  );
};

export default DashboradPage;
