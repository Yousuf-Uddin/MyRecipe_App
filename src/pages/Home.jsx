import { useState, useEffect } from "react";
import RecipeCard from "../Components/RecipeCard";
import AddRecipeButton from "../Components/AddRecipeButton";

function Home() {
  const [myRecipies, setMyRecipies] = useState([]);
  useEffect(() => {
    var storedRecipies = [],
      keys = Object.keys(localStorage),
      i = keys.length;
    while (i--) {
      storedRecipies.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    setMyRecipies(storedRecipies);
  }, []);
  return (
    <>
      <div className="p-2 h-full">
        {myRecipies.length > 0 ? (
          <div className="mt-4 px-4 flex gap-5 flex-wrap  ">
            {myRecipies.map((ele, index) => {
              return (
                <RecipeCard
                  title={ele.title}
                  description={ele.description}
                  source={ele.source}
                  rating={ele.rating}
                  imageUrl={ele.imageSrc}
                  key={index}
                />
              );
            })}
          </div>
        ) : (
          <div className="bg-gray-400 p-8 my-12 text-3xl font-semibold w-1/3 m-auto text-center rounded-xl bg-opacity-20">
            <p>No Recipes to View.</p>
          </div>
        )}
      </div>
      <AddRecipeButton />
    </>
  );
}

export default Home;
