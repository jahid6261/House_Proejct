import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedCard = ({ house }) => {
  const navigate = useNavigate();

  // 🔥 যদি house না থাকে তাহলে render করবে না
  if (!house) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
      
      <div className="h-48 w-full bg-gray-200 overflow-hidden rounded-t-xl">
        <img
          src={house.image || "/images/default-house.jpg"}
          alt={house.title || "House"}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-3">
        <h3 className="text-lg font-semibold">
          {house.title || "Untitled House"}
        </h3>

        <p className="text-gray-600 text-sm">
          {house.short_description || "Beautiful house available for rent."}
        </p>

        <p className="text-green-600 font-bold mt-2">
          BDT {house.price || "N/A"}
        </p>

        <button
          onClick={() => navigate(`/products/${house.id}`)}
          className="btn btn-primary w-full mt-2"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default FeaturedCard;
