
import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import { fetchFeaturedProducts } from "./featuredApi";

const FeaturedSection = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const productsPerSlide = 4;

  useEffect(() => {
    const loadHouses = async () => {
      setLoading(true);
      const data = await fetchFeaturedProducts();
      setHouses(data);
      setLoading(false);
    };
    loadHouses();
  }, []);

  const slideCount = Math.ceil(houses.length / productsPerSlide);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (slideCount === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 4000);
    return () => clearInterval(interval);
  }, [slideCount]);

  // Get products for current slide
  const currentProducts = houses.length
    ? houses.slice(
        currentSlide * productsPerSlide,
        currentSlide * productsPerSlide + productsPerSlide
      )
    : [];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Featured Houses
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loader border-t-4 border-b-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
          </div>
        ) : houses.length === 0 ? (
          <p className="text-center text-gray-500">No featured houses found.</p>
        ) : (
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500"
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {houses.map((house, index) => (
                <div
                  key={house.id || index}
                  className="flex-none w-full sm:w-1/2 md:w-1/4 p-2"
                >
                  <FeaturedCard house={house} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .loader {
          border-radius: 50%;
          border-top-width: 4px;
          border-bottom-width: 4px;
          border-style: solid;
          border-color: transparent;
          border-top-color: #3b82f6;
          border-bottom-color: #3b82f6;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </section>
  );
};

export default FeaturedSection;
