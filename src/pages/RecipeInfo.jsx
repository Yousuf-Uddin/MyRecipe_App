import {
  FaEdit,
  FaTrashAlt,
  FaList,
  FaPrint,
  FaBookOpen,
  FaBook,
} from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

function RecipeInfo() {
  const params = useParams();
  const navigate = useNavigate();

  const selectedRecipe = JSON.parse(localStorage.getItem(params.dishName));
  const descPara = selectedRecipe.instruction;
  const ingrePara = selectedRecipe.ingredients;

  //Delete Button Handler
  const deleteHandler = (e) => {
    const delBtn = e.target;
    // console.log(delBtn);
    delBtn.disabled = "true";
    delBtn.style.cursor = "not-allowed";
    localStorage.removeItem(selectedRecipe.title);
    toast.success("Recipe Removed Sucessfully.", { autoClose: 1500 });
    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

  //Print Button Handler
  const printHandler = () => {
    var printContents = document.querySelector(".printableArea").innerHTML;
    let w = window.open();
    w.document.write(printContents);
    w.print();
    w.close();
  };

  //Description Paragraph breakdown Function//
  const descBreak = descPara.split(".").map((sentence) => sentence.trim());

  //Ingredients Paragraph breakdown Function//
  const ingreBreak = ingrePara.split(",").map((sentence) => sentence.trim());

  return (
    <div className="printableArea mx-auto bg-gray-900 p-6 rounded-lg text-white">
      <div className="flex items-center">
        <img
          src={selectedRecipe.imageSrc}
          alt="Masala Chai"
          className="w-64 h-64 object-cover rounded-lg mr-4"
        />
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4">{selectedRecipe.title}</h2>
          <div className="border border-slate-700 my-2 "></div>
          <div className="flex items-center space-x-4 text-gray-400 text-sm">
            <span className="flex gap-1">
              Rating:
              <span className="flex items-center">
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <FaStar
                      size={16}
                      key={index}
                      className={` ${
                        ratingValue <= selectedRecipe.rating
                          ? "text-blue-500"
                          : "text-gray-400"
                      }`}
                    />
                  );
                })}
              </span>
            </span>
            <span>Source: {selectedRecipe.source}</span>
            <span>Preparation Time: {selectedRecipe.preparation} minutes</span>
            <span>Cooking Time: {selectedRecipe.cooking} minutes</span>
            {/* <span>Label:Drink</span> */}
          </div>
          <div className="border border-slate-700 my-2"></div>
          <p>{selectedRecipe.description}</p>
        </div>
      </div>

      <div className="mt-6 flex justify-start gap-8 px-2">
        <div className=" basis-1/2">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <FaBookOpen className="mr-2" /> Ingredients
          </h3>
          <ul className="list-disc list-inside">
            {ingreBreak.map((sentence, index) => (
              <li key={index}>{sentence}</li>
            ))}
          </ul>
        </div>

        <div className="basis-3/4">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <FaList className="mr-2" /> Instructions
          </h3>
          <ol className="list-decimal list-inside ">
            {descBreak.map((sentence, index) => (
              <li key={index}>{sentence}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-6 text-sm">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <FaBook className="mr-2" /> Notes
        </h3>
        <p className="px-2">-- {selectedRecipe.notes}</p>
      </div>
      <div className="mt-4 text-gray-400 text-sm">
        <p>Created --/--/----, --:--</p>
        <p>Last edited --/--/----, --:--</p>
      </div>

      <div className="mt-2 flex justify-center gap-4">
        <Link to={`/${selectedRecipe.title}/edit`}>
          <button className="flex items-center bg-gray-600 border-gray-600">
            <FaEdit className="mr-2" /> EDIT
          </button>
        </Link>
        <button
          onClick={deleteHandler}
          className="btnDelete flex items-center bg-gray-600 border-gray-600"
        >
          <FaTrashAlt className="mr-2" /> DELETE
        </button>
        <button
          onClick={printHandler}
          className="flex items-center bg-gray-600 border-gray-600"
        >
          <FaPrint className="mr-2" /> PRINT
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RecipeInfo;
