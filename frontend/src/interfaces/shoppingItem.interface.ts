// Define the type for a shopping item
// This type should match the structure of the shopping items in the backend
export interface ShoppingItemType {
  _id: string;
  name: string;
  bought: boolean;
  createdAt: Date;
}
