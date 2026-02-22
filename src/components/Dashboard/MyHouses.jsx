import React, { useEffect, useState } from "react";
import { FiEdit2, FiTrash2, FiExternalLink } from "react-icons/fi";
import apiClient from "../../services/api-client";

const MyHouses = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyHouses = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get("/products/");
        

        if (response.data && response.data.results) {
          setHouses(response.data.results);
        } else {
          setHouses([]);
        }
      } catch (error) {
        console.error("Error fetching houses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyHouses();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-pulse">
        {[1, 2].map((i) => (
          <div key={i} className="h-32 bg-base-300 rounded-xl"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">My Property Links</h2>
        <button className="btn btn-primary btn-sm rounded-full">+ Add New</button>
      </div>

      {houses.length === 0 ? (
        <div className="alert alert-info py-2 text-sm italic">
          No properties found in your list.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {houses.map((house) => (
            <div key={house.id} className="card card-side bg-base-100 shadow-sm border border-base-200 overflow-hidden">
              <figure className="w-1/3 bg-base-200">
                <img 
                 
                  src={house.images && house.images.length > 0 ? house.images[0].image : "https://via.placeholder.com/300"} 
                  className="h-full w-full object-cover" 
                  alt={house.title}
                />
              </figure>
              <div className="card-body p-4 justify-between">
                <div>
                  <span className={`badge badge-sm mb-1 ${house.stock > 0 ? 'badge-success' : 'badge-error'}`}>
                    {house.stock > 0 ? 'Available' : 'Booked'}
                  </span>
                  <h3 className="font-bold text-gray-800 leading-tight line-clamp-1 text-sm">{house.title}</h3>
                  <p className="text-primary font-bold text-xs">৳ {house.price}</p>
                </div>
                <div className="card-actions justify-end gap-1">
                  <button className="btn btn-square btn-xs btn-ghost text-info" title="Edit"><FiEdit2 /></button>
                  <button className="btn btn-square btn-xs btn-ghost text-error" title="Delete"><FiTrash2 /></button>
                  <button className="btn btn-square btn-xs btn-outline" title="View"><FiExternalLink /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyHouses;