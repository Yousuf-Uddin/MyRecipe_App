import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FloatingActionButton = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/addRecipe");
  };
  return (
    <button
      onClick={navigateHandler}
      className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg"
    >
      <FaPlus className="text-2xl" />
    </button>
  );
};

export default FloatingActionButton;
