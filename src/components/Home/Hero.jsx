import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [sort, setSort] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (searchQuery) params.append("search", searchQuery);
    if (category) params.append("category_id", category);
    if (priceMin) params.append("price__gt", priceMin);
    if (priceMax) params.append("price__lt", priceMax);
    if (sort) params.append("ordering", sort);

    navigate(`/houses?${params.toString()}`);
  };

  return (
    <div
      className="relative h-[550px] w-full flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero.jpg')", 
      }}
    >
      
      <div className="absolute inset-0 bg-black/40"></div>

    
      <div className="relative z-10 text-center px-4 md:px-20 w-full max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl">
          Find Your Dream House
        </h1>
        <p className="text-lg md:text-xl mb-10 drop-shadow-lg">
          Search houses and apartments by category, price, or address.
        </p>

        {/* Search & Filter Form */}
        <form
          onSubmit={handleSearch}
          className="flex flex-wrap justify-center gap-3 bg-white p-6 rounded-2xl shadow-2xl text-black"
        >
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by city, address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered flex-1 min-w-[220px] bg-gray-50 focus:bg-white border-gray-300"
          />

          {/* Category Select */}
          <select
            className="select select-bordered bg-gray-50 focus:bg-white border-gray-300"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="1">Flat</option>
            <option value="2">Sublet</option>
            <option value="3">Apartment</option>
            <option value="4">House</option>
          </select>

          {/* Price Range */}
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min Price"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              className="input input-bordered w-28 bg-gray-50 focus:bg-white border-gray-300"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              className="input input-bordered w-28 bg-gray-50 focus:bg-white border-gray-300"
            />
          </div>

          {/* Sorting */}
          <select
            className="select select-bordered bg-gray-50 focus:bg-white border-gray-300"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price">Price Ascending</option>
            <option value="-price">Price Descending</option>
            <option value="updated_at">Updated At Ascending</option>
            <option value="-updated_at">Updated At Descending</option>
          </select>

          {/* Search Button */}
          <button type="submit" className="btn btn-primary px-10 font-bold uppercase tracking-wider">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;