import React from "react";
import { Star } from "lucide-react";

const StarRating = ({ rating, setRating, interactive = false }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          type="button"
          disabled={!interactive}
          onClick={() => interactive && setRating(num)}
          className={`${interactive ? "cursor-pointer hover:scale-110 transition-transform" : "cursor-default"}`}
        >
          <Star
            size={interactive ? 24 : 18}
            className={`${num <= rating ? "fill-warning text-warning" : "text-base-300"} transition-colors`}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;