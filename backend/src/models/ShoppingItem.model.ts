import { Schema, model } from "mongoose";
import { ShoppingItem } from "../types/shoppingItem.types";

const shoppingItemSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    bought: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model<ShoppingItem>("ShoppingItem", shoppingItemSchema);
