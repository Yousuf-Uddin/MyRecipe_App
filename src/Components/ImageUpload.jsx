/* eslint-disable react/prop-types */
import { useState } from "react";

const ImageUpload = ({ formData, setformData }) => {
  const [image, setImage] = useState(formData.imageSrc);
  const [error, setError] = useState("");
  const handleImageUpload = (event) => {
    console.log(event.target);
    const file = event.target.files[0];
    const fileTypes = ["image/jpeg", "image/png", "image/gif"];
    const maxSize = 2 * 1024 * 1024; // 2 MB
    if (file) {
      // Validate file type
      if (!fileTypes.includes(file.type)) {
        setError("Only JPG, PNG, and GIF files are allowed.");
        return;
      }

      // Validate file size
      if (file.size > maxSize) {
        setError("File size should not exceed 2 MB.");
        return;
      }

      // Reset error message
      setError("");

      let reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setformData({ ...formData, [event.target.name]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setformData({ ...formData, imageSrc: null });
    setError("");
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <label className="w-48 h-48  hover:bg-slate-600 bg-slate-700 flex items-center justify-center cursor-pointer rounded-lg overflow-hidden  relative">
        {image ? (
          <img
            src={image}
            alt="Uploaded"
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="text-center text-white">
            <span className="text-2xl">+</span>
            <p>Click to Add Image</p>
          </div>
        )}
        <input
          type="file"
          name="imageSrc"
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleImageUpload}
        />
      </label>

      {image && (
        <button
          onClick={handleRemoveImage}
          className="mt-2 bg-red-600 text-white py-2 px-2 rounded"
        >
          Remove Image
        </button>
      )}

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default ImageUpload;
