import React, { useEffect, useState } from "react";
import { FiStar, FiMessageSquare } from "react-icons/fi";
import apiClient from "../../services/api-client"; 

const ReviewsSection = ({ product_pk }) => { 
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
     
        const response = await apiClient.get(`/products/${product_pk}/reviews/`);
        setReviews(response.data);
      } catch (err) {
        console.error("Review Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (product_pk) {
      fetchReviews();
    }
  }, [product_pk]);

  if (loading) return <div className="skeleton h-64 w-full rounded-2xl"></div>;

  return (
    <div className="bg-base-100 p-6 rounded-2xl border border-base-200 shadow-sm h-full">
      <div className="flex items-center gap-2 mb-6">
        <FiMessageSquare className="text-primary" />
        <h2 className="text-xl font-bold text-gray-800">Latest Feedback</h2>
      </div>
      
      <div className="space-y-6 overflow-y-auto max-h-[450px] pr-2 scrollbar-thin">
        {reviews.length === 0 ? (
          <div className="text-center py-10 opacity-50">
            <p className="text-sm italic">No feedback for this house yet.</p>
          </div>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="flex gap-4 border-b border-base-100 pb-4 last:border-0 hover:bg-base-50/50 transition-all rounded-lg p-2">
              <div className="avatar placeholder">
                <div className="bg-primary/10 text-primary rounded-full w-10 h-10 font-bold uppercase flex items-center justify-center">
                  <span>{review.user?.charAt(0) || "U"}</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-xs text-gray-700">{review.user}</h4>
                  <div className="flex text-warning text-[10px] items-center gap-1">
                    <FiStar fill="currentColor" /> {review.rating}.0
                  </div>
                </div>
                <p className="text-gray-500 text-[11px] mt-1 leading-relaxed">
                  "{review.comment}"
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewsSection;