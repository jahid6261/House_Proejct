const ProductImages = ({ images }) => {
  return (
     <img
    src={images.image || "/images/default-house.jpg"}
    alt={images.title || "House"}
    className="h-full w-full object-cover rounded-lg"
  />
   
  );
};

export default ProductImages;