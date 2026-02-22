import React, { useState, useEffect } from "react";

const banners = [
  {
    image: "/images/banner.jpg",
    title: "Find Your Dream Home",
    subtitle: "Explore thousands of houses and apartments for rent",
  },
  {
    image: "/images/banner1.jpg",
    title: "Affordable Houses",
    subtitle: "Choose a house within your budget easily",
  },
  {
    image: "/images/banner2.jpg",
    title: "Fast & Easy Renting",
    subtitle: "Post your house and find tenants in no time",
  },
];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[50vh] w-full overflow-hidden bg-gray-900">
      {banners.map((banner, index) => {
        let position = "translate-x-full";

        if (index === currentIndex) {
          position = "translate-x-0";
        } else if (
          index === (currentIndex - 1 + banners.length) % banners.length
        ) {
          position = "-translate-x-full";
        }

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${position}`}
          >
            {/* Background Image */}
            <img
              src={banner.image}
              alt={banner.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {banner.title}
              </h2>
              <p className="text-white text-lg md:text-xl max-w-2xl">
                {banner.subtitle}
              </p>
            </div>
          </div>
        );
      })}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {banners.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerCarousel;
