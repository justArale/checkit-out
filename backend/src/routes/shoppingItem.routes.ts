import { Router, Response, Request } from "express";
import ShoppingItem from "../models/ShoppingItem.model";
import { validateObjectId } from "../middleware/validateObjectId";

const router = Router();

// GET /items - Retrieve all shopping items
router.get("/items", async (_req: Request, res: Response): Promise<void> => {
  try {
    const items = await ShoppingItem.find();
    res.status(200).json({ items });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching the items:", error.message);
    } else {
      console.error("Unknown error while fetching the items:", error);
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// POST /items - Creates a new shopping item
router.post("/items", async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;

    // Basic validation (allows emojis, but ensures it's a non-empty string)
    if (!name || typeof name !== "string" || name.trim() === "") {
      res.status(400).json({ error: "Item name is required." });
      return;
    }
    // Creates a new shopping item (emojis are valid unicode strings and fully supported)
    const newShoppingItem = await ShoppingItem.create({
      name,
    });
    res.status(201).json({ message: "Item created", item: newShoppingItem });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error while creating the item:", error.message);
    } else {
      console.error("Unknown error while creating the item:", error);
    }
    res.status(500).json({ error: "Failed to create the shopping item" });
  }
});

// PUT /items/:id - Updates the "bought" status of a shopping item
router.put(
  "/items/:id",
  validateObjectId,
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { bought } = req.body;
    try {
      // Validate the "bought" field
      if (typeof bought !== "boolean") {
        res.status(400).json({ error: "Invalid 'bought' status." });
        return;
      }

      // Update the item
      const updatedItem = await ShoppingItem.findByIdAndUpdate(
        id,
        { bought },
        { new: true }
      );

      if (!updatedItem) {
        res.status(404).json({ error: "Item not found." });
        return;
      }

      res.json({ message: "Item updated", item: updatedItem });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error updating item:", error.message);
      } else {
        console.error("Unknown error updating item:", error);
      }
      res.status(500).json({ error: "Failed to update item." });
    }
  }
);

// DELETE /items/:id - Deletes a shopping item
router.delete(
  "/items/:id",
  validateObjectId,
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      // Delete the item
      const deletedItem = await ShoppingItem.findByIdAndDelete(id);
      if (!deletedItem) {
        res.status(404).json({ error: "Item not found." });
        return;
      }
      res.json({ message: "Item deleted" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error deleting item:", error.message);
      } else {
        console.error("Unknown error deleting item:", error);
      }
      res.status(500).json({ error: "Failed to delete item." });
    }
  }
);

export default router;
