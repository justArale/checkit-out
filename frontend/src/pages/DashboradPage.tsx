import React from "react";
import ShoppingItemForm from "../components/ShoppingItemForm";
import ShoppingItemList from "../components/ShoppingItemList";

const DashboradPage: React.FC = () => {
  return (
    <>
      <ShoppingItemForm />
      <ShoppingItemList />
    </>
  );
};

export default DashboradPage;
