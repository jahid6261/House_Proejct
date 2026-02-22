import React from "react";
import api from "../../services/api-client";
import StarRating from "./StarRating";
import { Trash2, Edit3, UserCircle } from "lucide-react";

const ReviewList = ({ reviews = [], product_pk, currentUser, refreshReviews, onEdit }) => {
  
  const handleDelete = async (reviewId) => {
    if (!window.confirm("Delete this review?")) return;

    let token = localStorage.getItem("token") || localStorage.getItem("access");
    if (token) token = token.replace(/"/g, '');

    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };

    try {
      await api.delete(`/products/${product_pk}/reviews/${reviewId}/`, config);
      refreshReviews();
    } catch (error) {
      alert("Could not delete review.");
    }
  };

  if (reviews.length === 0) return <p className="text-center py-10 text-gray-400 italic">No reviews yet.</p>;

  return (
    <div className="space-y-4 mt-6">
      {reviews.map((rev) => (
        <div key={rev.id} className="p-5 bg-base-100 border border-base-200 rounded-2xl shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <UserCircle size={32} className="text-base-300" />
              <div>
                <p className="font-bold text-sm">@{rev.user}</p>
                <StarRating rating={rev.rating} />
              </div>
            </div>
           
            {currentUser && rev.user === currentUser.username && (
              <div className="flex gap-1">
                <button onClick={() => onEdit(rev)} className="btn btn-ghost btn-sm btn-circle text-info"><Edit3 size={18} /></button>
                <button onClick={() => handleDelete(rev.id)} className="btn btn-ghost btn-sm btn-circle text-error"><Trash2 size={18} /></button>
              </div>
            )}
          </div>
          <p className="mt-4 text-base-content/70 italic">"{rev.comment}"</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;