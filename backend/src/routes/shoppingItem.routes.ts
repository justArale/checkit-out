import { Router, RequestHandler } from "express";
import mongoose from "mongoose";
import ShoppingItem from "../models/ShoppingItem.model";

const router = Router();

// GET /items - Retrieve all shopping items
router.get("/items", async (_req, res, _next) => {
  try {
    const items = await ShoppingItem.find();
    res.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// POST /items - Creates a new shopping item
router.post("/items", (async (req, res) => {
  try {
    const { name } = req.body;

    // Basic validation (allows emojis, but ensures it's a non-empty string)
    if (!name || typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({ error: "Item name is required." });
    }

    // Creates a new shopping item (emojis are valid unicode strings and fully supported)
    const newShoppingItem = await ShoppingItem.create({
      name,
    });
    res.status(201).json({ message: "Item created", item: newShoppingItem });
  } catch (error) {
    console.error("Error while creating the shopping item ->", error);
    res.status(500).json({ error: "Failed to create the shopping item" });
  }
}) as RequestHandler);

// PUT /items/:id - Updates the "bought" status of a shopping item
router.put("/items/:id", (async (req, res) => {
  const { id } = req.params;
  const { bought } = req.body;
  try {
    // Validate the ID format
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid item ID." });
    }

    // Validate the "bought" field
    if (typeof bought !== "boolean") {
      return res.status(400).json({ error: "Invalid 'bought' status." });
    }

    // Update the item
    const updatedItem = await ShoppingItem.findByIdAndUpdate(
      id,
      { bought },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found." });
    }

    res.json({ message: "Item updated", item: updatedItem });
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).json({ error: "Failed to update item." });
  }
}) as RequestHandler);

// DELETE /items/:id - Deletes a shopping item
router.delete("/items/:id", (async (req, res) => {
  const { id } = req.params;
  try {
    // Validate the ID format
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid item ID." });
    }
    // Delete the item
    const deletedItem = await ShoppingItem.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found." });
    }
    res.json({ message: "Item deleted" });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ error: "Failed to delete item." });
  }
}) as RequestHandler);

export default router;
