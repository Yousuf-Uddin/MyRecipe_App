/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ formData, setformData }) => {
  const [hover, setHover] = useState(null);
  return (
    <div className="flex items-center">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={(e) =>
                setformData({ ...formData, [e.target.name]: ratingValue })
              }
              className="hidden"
            />
            <FaStar
              size={30}
              className={`cursor-pointer transition-colors duration-200 ${
                ratingValue <= (hover || formData.rating)
                  ? "text-yellow-500"
                  : "text-gray-400"
              }`}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
