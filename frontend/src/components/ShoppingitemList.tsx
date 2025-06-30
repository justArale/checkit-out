import React from "react";

interface Props {
  items: { _id: string; name: string }[];
}
const ShoppingItemList: React.FC<Props> = ({ items }) => {
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
