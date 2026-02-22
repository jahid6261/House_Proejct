
import React, { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import CategoryItem from "./CategoryItem";


const images = [
  "/images/house1.jpeg",
  "/images/sublet.jpg",
  "/images/flat.jpeg",
  "/images/appaertment.jpeg",
];

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiClient
      .get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Browse Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <CategoryItem
            key={cat.id}
            id={cat.id}
            name={cat.name}
            description={cat.description}
            count={cat.product_count}
            image={images[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
