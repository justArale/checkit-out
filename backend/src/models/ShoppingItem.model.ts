const { Schema, model } = require("mongoose");

const shoppingItemSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
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
