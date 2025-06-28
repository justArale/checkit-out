import { ObjectId } from "mongoose";

const { Schema, model } = require("mongoose");

// Went with `interface` over `type` here — it's cleaner for object models, supports declaration merging, and is future-proof for potential extensions.
export interface ShoppingItem {
  _id: ObjectId;
  name: string;
  bought: boolean;
  createdAt: Date;
}

const shoppingItemSchema = new Schema(
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

const ShoppingItem = model("ShoppingItem", shoppingItemSchema);

module.exports = ShoppingItem;
