import { Router, Request, Response, NextFunction } from "express";

const router = Router();
// const mongoose = require("mongoose");
const ShoppingItem = require("../models/shoppingItem.model");

// GET /items - Retrieve all shopping items
router.get(
  "/items",
  async (_req: Request, res: Response, _next: NextFunction) => {
    try {
      const items = await ShoppingItem.find();
      res.json(items);
    } catch (error) {
      console.error("Error fetching items:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

export default router;

/* ### Endpunkte:

- `GET /items` - DONE
    
    ➜ Gibt die Einkaufsliste zurück
    
- `POST /items`
    
    ➜ Fügt einen neuen Eintrag hinzu
    
    **Body:** `{ name: string }`
    
- `PUT /items/:id`
    
    ➜ Aktualisiert den „gekauft“-Status
    
    **Body:** `{ bought: boolean }`
    
- `DELETE /items/:id`
    
    ➜ Löscht einen Eintrag
    

### */
