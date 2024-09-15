/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ImageUpload from "../Components/ImageUpload";
import StarRating from "../Components/StarRating";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeForm = () => {
  const params = useParams();
  const editRecipe = JSON.parse(localStorage.getItem(params.dishName));

  const navigate = useNavigate();
  const [formData, setformData] = useState({
    title: "",
    description: "",
    preparation: "",
    cooking: "",
    source: "",
    rating: "",
    ingredients: "",
    instruction: "",
    notes: "",
    imageSrc: null,
  });
  //Edit Recipe logic//
  useEffect(() => {
    editRecipe ? setformData({ ...editRecipe }) : setformData({ ...formData });
  }, []);
  //Add Recipe Logic
  const formHandler = (e) => {
    const submitBtn = e.target.querySelector(".btnSubmit");
    submitBtn.disabled = "true";
    submitBtn.style.cursor = "not-allowed";
    e.preventDefault();
    // console.log(formData);
    localStorage.setItem(formData.title, JSON.stringify(formData));
    setformData({
      title: "",
      description: "",
      preparation: "",
      cooking: "",
      source: "",
      rating: "",
      ingredients: "",
      instruction: "",
      notes: "",
      imageSrc: null,
    });
    editRecipe
      ? toast.success("Recipe Edited Sucessfully.", { autoClose: 1500 })
      : toast.success("Recipe Added to LocalStorage.", { autoClose: 1500 });
    setTimeout(() => {
      navigate("/MyRecipe_App/");
    }, 2500);
  };

  const handleInputs = (e) => {
    let inputfinder = e.target.id;
    setformData({ ...formData, [inputfinder]: e.target.value });
  };

  return (
    <div className="min-h-screen text-white p-8 w-[98.5vw] ">
      <div className="max-w-5xl mx-auto">
        <form onSubmit={formHandler}>
          <ImageUpload
            formData={editRecipe ? editRecipe : formData}
            setformData={setformData}
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-md font-semibold">Title</label>
              {editRecipe ? (
                <input
                  id="title"
                  disabled
                  value={formData.title}
                  onChange={handleInputs}
                  type="text"
                  className="w-full focus:outline-none cursor-not-allowed bg-gray-900 p-2 border-b  mt-1"
                />
              ) : (
                <input
                  id="title"
                  required
                  value={formData.title}
                  onChange={handleInputs}
                  type="text"
                  className="w-full focus:outline-none bg-gray-900 p-2 border-b  mt-1"
                />
              )}
            </div>

            <div className="col-span-2">
              <label className="block text-md font-semibold">Description</label>
              <input
                type="text"
                id="description"
                required
                value={formData.description}
                onChange={handleInputs}
                className="w-full focus:outline-none bg-gray-900 p-2 border-b mt-1"
                rows="3"
              ></input>
            </div>

            <div>
              <label className="block text-md font-semibold">
                Preparation Time
                <span className="italic px-1 text-[14px]">(in minutes)</span>
              </label>
              <input
                type="text"
                id="preparation"
                value={formData.preparation}
                onChange={handleInputs}
                className="w-full focus:outline-none bg-gray-900 p-2  border-b mt-1"
              />
            </div>

            <div>
              <label className="block text-md font-semibold">
                Cooking Time
                <span className="italic px-1 text-[14px]">(in minutes)</span>
              </label>
              <input
                type="text"
                id="cooking"
                value={formData.cooking}
                onChange={handleInputs}
                className="w-full focus:outline-none bg-gray-900 p-2 border-b  mt-1"
              />
            </div>

            <div>
              <label className="block text-md font-semibold">Source</label>
              <input
                id="source"
                value={formData.source}
                onChange={handleInputs}
                type="text"
                className="w-full focus:outline-none bg-gray-900 p-2 border-b  mt-1"
              />
            </div>

            <div className="col-span-1 flex items-center space-x-6">
              <label className="block text-md font-semibold">Rating</label>
              <div className="flex space-x-1">
                <StarRating formData={formData} setformData={setformData} />
              </div>
            </div>

            <div className="col-span-2">
              <label className=" text-md font-semibold">Ingredients</label>
              <span className="italic px-1 text-[12px]">
                (use <b className="text-xl px-1">,</b> seperator to
                differentiate between multiple ingredients)
              </span>
              <textarea
                id="ingredients"
                required
                value={formData.ingredients}
                onChange={handleInputs}
                className="w-full focus:outline-none bg-gray-900 p-2 border-b  mt-1"
                rows="5"
              ></textarea>
            </div>

            <div className="col-span-2">
              <label className="text-md font-semibold">Instructions</label>
              <span className="italic px-1 text-[12px]">
                (use <b className="text-xl px-1">.</b> seperator to
                differentiate between multiple Instructions)
              </span>
              <textarea
                id="instruction"
                required
                value={formData.instruction}
                onChange={handleInputs}
                className="w-full focus:outline-none bg-gray-900 p-2 border-b  mt-1"
                rows="3"
              ></textarea>
            </div>

            <div className="col-span-2">
              <label className="block text-md font-semibold">Notes</label>
              <input
                type="text"
                id="notes"
                value={formData.notes}
                onChange={handleInputs}
                className="w-full bg-gray-900 p-2 focus:outline-none border-b  mt-2"
                rows="2"
              ></input>
            </div>
          </div>

          {/* <div className="mt-8">
            <label className="block text-md font-semibold mb-1">Labels</label>
            <div className="bg-slate-300 rounded-full p-1 m-2 w-fit">
              <span className="text-gray-800 p-2 ">No selected labels</span>
            </div>
            <div className="bg-gray-800 py-2  flex ">
            <input
            type="text"
            className="bg-gray-800 border-b p-2 text-white w-full "
            placeholder="Search for a label"
            />
            </div>
            </div> */}
          <ToastContainer position="top-right" />

          <button className="btnSubmit bg-blue-700 focus:outline-none hover:bg-blue-500 w-full mt-6 p-2">
            {editRecipe ? "SAVE" : "CREATE"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecipeForm;
