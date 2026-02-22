import React, { useState, useEffect } from "react";

import authApiClient from "../../services/authApiClient"; 
import StarRating from "./StarRating";

const ReviewForm = ({ product_pk, existingReview, refreshReviews, onCancel }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (existingReview) {
      setRating(existingReview.rating);
      setComment(existingReview.comment);
    }
  }, [existingReview]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) return alert("Please select a rating!");
    
    setLoading(true);

    const payload = { 
      product: parseInt(product_pk), 
      rating: parseInt(rating), 
      comment: comment 
    };

    try {
     
      if (existingReview) {
        await authApiClient.put(`/products/${product_pk}/reviews/${existingReview.id}/`, payload);
      } else {
        await authApiClient.post(`/products/${product_pk}/reviews/`, payload);
      }
      
      setComment("");
      setRating(0);
      refreshReviews();
      if (onCancel) onCancel();
      alert("Success!");
    } catch (error) {
      console.error("API Error:", error.response?.data);
      
      if (error.response?.data?.code === "token_not_valid") {
        alert("Session expired. Please logout and login again.");
      } else {
        alert(error.response?.data?.detail || "You've already reviewed this product.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-base-200 p-6 rounded-2xl border border-base-300 shadow-inner my-6">
      <h3 className="font-bold text-lg mb-4">{existingReview ? "Edit Your Review" : "Add a Review"}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <StarRating rating={rating} setRating={setRating} interactive={true} />
        <textarea
          className="textarea textarea-bordered w-full h-24 rounded-xl focus:ring-primary"
          placeholder="How was your experience?"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <div className="flex gap-2">
          <button disabled={loading} className="btn btn-primary rounded-xl px-8 text-white">
            {loading ? <span className="loading loading-spinner"></span> : (existingReview ? "Update" : "Submit")}
          </button>
          {onCancel && <button type="button" onClick={onCancel} className="btn btn-ghost">Cancel</button>}
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;