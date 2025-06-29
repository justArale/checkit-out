import { Router, RequestHandler } from "express";

const router = Router();
import ShoppingItem from "../models/ShoppingItem.model";

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

export default router;

/* ### Endpunkte:

- `GET /items` - DONE
    
    ➜ Gibt die Einkaufsliste zurück
    
- `POST /items` - DONE
    
    ➜ Fügt einen neuen Eintrag hinzu
    
    **Body:** `{ name: string }`
    
- `PUT /items/:id`
    
    ➜ Aktualisiert den „gekauft“-Status
    
    **Body:** `{ bought: boolean }`
    
- `DELETE /items/:id`
    
    ➜ Löscht einen Eintrag
    

### */
