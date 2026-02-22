import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../services/api-client"; 

import ProductImages from "../components/ProductDetail/ProductImages";
import ProductInfo from "../components/ProductDetail/ProductInfo";
import BookingSection from "../components/ProductDetail/BookingSection";

// Reviews Components
import ReviewList from "../components/Reviews/ReviewList";
import ReviewForm from "../components/Reviews/ReviewForm";
import useAuthContext from "../hooks/useAuthContext"; 

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [editingReview, setEditingReview] = useState(null); 
  const { user } = useAuthContext();

  // 1. Fetch Product & Reviews
  const fetchData = async () => {
    try {
      const [productRes, reviewRes] = await Promise.all([
        apiClient.get(`/products/${id}/`),
        apiClient.get(`/products/${id}/reviews/`)
      ]);
      setProduct(productRes.data);
      setReviews(reviewRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) return <div className="text-center py-20"><span className="loading loading-spinner loading-lg"></span></div>;
  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10">
        <ProductImages images={product.images} />

        <div className="space-y-8">
          <ProductInfo product={product} />
          
          <BookingSection productId={product.id} />
          
          <div className="divider"></div>

         
          <h3 className="text-2xl font-bold">Reviews</h3>
          
        
          {user && (
            <ReviewForm 
              product_pk={id} 
              existingReview={editingReview} 
              refreshReviews={fetchData} 
              onCancel={editingReview ? () => setEditingReview(null) : null}
            />
          )}

         
          <ReviewList 
            reviews={reviews} 
            product_pk={id} 
            currentUser={user} 
            refreshReviews={fetchData} 
            onEdit={(rev) => setEditingReview(rev)} 
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;