import { ObjectId, Document } from "mongoose";

// Went with `interface` over `type` here — it's cleaner for object models, supports declaration merging, and is future-proof for potential extensions.
export interface ShoppingItem extends Document {
  _id: ObjectId;
  name: string;
  bought: boolean;
  createdAt: Date;
}
