
import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ id, name, description, count, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/houses?category_id=${id}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
       <div className="h-40 w-full overflow-hidden">
       <img
  src={image}   
  alt={name}
  className="w-full h-full object-cover"
/>
    </div>
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-gray-600 text-sm mb-2">{description}</p>
          <span className="text-gray-800 font-bold">{count} listings</span>
        </div>
        <button
          onClick={handleClick}
          className="mt-3 btn btn-primary w-full"
        >
          View {name}
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
