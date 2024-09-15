import { Route, Routes } from "react-router-dom";
import AddRecipeForm from "../pages/AddRecipeForm";
import RecipeInfo from "../pages/RecipeInfo";
import Home from "../pages/Home";

function Routing() {
  return (
    <Routes>
      <Route path="/MyRecipe_App" element={<Home />} />
      <Route path="/addRecipe" element={<AddRecipeForm />} />
      <Route path="/recipeInfo" element={<RecipeInfo />} />
      <Route path="/recipeInfo/:dishName" element={<RecipeInfo />} />
      <Route path="/:dishName/edit" element={<AddRecipeForm />} />
    </Routes>
  );
}

export default Routing;
