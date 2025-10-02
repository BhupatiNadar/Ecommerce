import React, { useState, useContext } from "react";
import { ProductContext } from "../../Contexts/productContext/ProductProvider";
import { MdAddPhotoAlternate } from "react-icons/md"; // For a nice icon

const AddProduct = () => {
  const { products, loading, error } = useContext(ProductContext);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "",
    rating: "",
    price: "",
    prepTime: "",
    cookTime: "", 
  });


  const [imageFile, setImageFile] = useState(null);

  // Handler for text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for file input change
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically use FormData to send both text and file to your backend
    const productData = new FormData();

    // Append all form fields to FormData
    for (const key in formData) {
      productData.append(key, formData[key]);
    }
    if (imageFile) {
      productData.append("imageUrl", imageFile);
    }

    console.log(
      "Submitting the following data:",
      Object.fromEntries(productData)
    );
    // **TODO: Add your API call logic here to post the 'productData' to the server**
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        <p className="text-2xl font-semibold text-gray-700">
          Loading products...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        <p className="text-2xl font-semibold text-red-600">Error: {error}</p>
      </div>
    );
  }


  return (
    <div className="bg-orange-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8">
          Manage Products
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg h-fit">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
              Add a New Product
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price ($)
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="rating"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Rating (1-5)
                  </label>
                  <input
                    type="number"
                    name="rating"
                    id="rating"
                    step="0.1"
                    min="1"
                    max="5"
                    value={formData.rating}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="prepTime"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Prep Time
                  </label>
                  <input
                    type="text"
                    name="prepTime"
                    id="prepTime"
                    placeholder="e.g., 15 mins"
                    value={formData.prepTime}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cookTime"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Cook Time
                  </label>
                  <input
                    type="text"
                    name="cookTime"
                    id="cookTime"
                    placeholder="e.g., 25 mins"
                    value={formData.cookTime}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Product Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <MdAddPhotoAlternate className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="imageUrl"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="imageUrl"
                          name="imageUrl"
                          type="file"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                    {imageFile && (
                      <p className="text-sm text-green-600 pt-2">
                        {imageFile.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
              >
                Add Product
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Existing Products ({products.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
                >
                  <img
                    src={`http://localhost:8080${product.imageUrl}`}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {product.category}
                    </p>
                    <div className="flex justify-between items-center mt-3">
                      <p className="text-lg font-bold text-orange-600">
                        ₹{product.price}
                      </p>
                      <p className="text-sm text-gray-500">
                        {product.prepTime} | {product.cookTime}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
