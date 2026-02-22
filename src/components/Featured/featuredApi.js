import apiClient from "../../services/api-client";

export const fetchFeaturedProducts = async () => {
  try {
    const res = await apiClient.get("/products");
    return res.data.results;
  } catch (err) {
    console.error("Error fetching featured products:", err);
    return [];
  }
};
