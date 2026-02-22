import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apiClient from "../../services/api-client";

const Houses = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const search = queryParams.get("search") || "";
  const category = queryParams.get("category_id") || "";
  const priceMin = queryParams.get("price__gt") || "";
  const priceMax = queryParams.get("price__lt") || "";
  const ordering = queryParams.get("ordering") || "";

  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (search) params.append("search", search);
    if (category) params.append("category_id", category);
    if (priceMin) params.append("price__gt", priceMin);
    if (priceMax) params.append("price__lt", priceMax);
    if (ordering) params.append("ordering", ordering);
    params.append("page", page);

    apiClient
      .get(`/products/?${params.toString()}`)
      .then((res) => {
        setHouses(res.data.results);
        setNext(res.data.next);
        setPrevious(res.data.previous);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [search, category, priceMin, priceMax, ordering, page]);

  const handleNext = () => {
    if (next) setPage(page + 1);
  };
  const handlePrev = () => {
    if (previous && page > 1) setPage(page - 1);
  };

  const handleViewDetails = (id) => {
    navigate(`/products/${id}`); 
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-4">
        {search ? `Results for "${search}"` : "All Houses"}
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : houses.length === 0 ? (
        <p>No houses found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {houses.map((house) => (
            <div key={house.id} className="border rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                {house.images && house.images.length > 0 ? (
                  <img
                    src={house.images[0]}
                    alt={house.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>No Image</span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{house.title}</h3>
                <p className="text-gray-600">{house.address}</p>
                <p className="font-bold text-lg">৳{house.price}</p>
                <p className="text-sm text-gray-500 mt-1">{house.description}</p>

                {/* ✅ View Details Button */}
                <button
                  className="mt-2 btn btn-primary"
                  onClick={() => handleViewDetails(house.id)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          className="btn btn-outline"
          onClick={handlePrev}
          disabled={!previous}
        >
          Previous
        </button>
        <button
          className="btn btn-outline"
          onClick={handleNext}
          disabled={!next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Houses;
