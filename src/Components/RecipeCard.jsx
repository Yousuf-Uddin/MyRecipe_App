/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const RecipeCard = ({ title, description, rating, source, imageUrl }) => {
  const maxLength = 96;
  const shortdesc =
    description.length > 90
      ? description.substring(0, maxLength - 3) + "..."
      : description;
  return (
    <Link to={`/recipeInfo/${title}`}>
      <div className=" bg-gray-800 rounded-lg overflow-hidden shadow-lg w-72 min-h-full">
        <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />
        <div className="p-4 flex flex-col justify-around">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-400 mt-1">{shortdesc}</p>
          {/* <p className="text-gray-500 mt-2">Ingredients: {ingredients}</p> */}
          <div className="">
            <p className="text-gray-500 mt-2 flex items-center gap-1">
              Rating:{" "}
              <span className="flex items-center">
                {[...Array(rating)].map((star, index) => {
                  return (
                    <FaStar size={16} key={index} className="text-blue-300" />
                  );
                })}
              </span>
            </p>
            <p className="text-gray-500 ">Source: {source}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
