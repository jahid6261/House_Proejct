const ProductInfo = ({ product }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{product.title}</h1>

      <p className="mt-3 text-gray-600">{product.description}</p>

      <div className="mt-3">
        <p><strong>Address:</strong> {product.address}</p>
        <p><strong>Location:</strong> {product.location}</p>
      </div>

      <p className="text-2xl font-semibold mt-4">
        ৳ {product.price}
      </p>
    </div>
  );
};

export default ProductInfo;