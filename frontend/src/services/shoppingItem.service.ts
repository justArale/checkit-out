import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5005",
  withCredentials: true,
});

// Get all shopping items
export const getAllShoppingItems = async () => {
  try {
    const response = await API.get(`/api/items`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching shopping items:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

// Create a new shopping item
export const createShoppingItem = async (item: {
  name: string;
}): Promise<void> => {
  try {
    const response = await API.post(`/api/items`, item);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error creating shopping item:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

// Update an existing shopping item
export const updateShoppingItem = async (
  id: string,
  item: { bought: boolean }
): Promise<void> => {
  try {
    const response = await API.put(`/api/items/${id}`, item);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error updating shopping item:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

// Delete a shopping item
export const deleteShoppingItem = async (id: string): Promise<void> => {
  try {
    const response = await API.delete(`/api/items/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error deleting shopping item:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

export default {
  getAllShoppingItems,
  createShoppingItem,
  updateShoppingItem,
  deleteShoppingItem,
};
