import { Schema, model } from "mongoose";
import { ShoppingItemType } from "../types/shoppingItem.types";

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

export default model<ShoppingItemType>("ShoppingItem", shoppingItemSchema);
