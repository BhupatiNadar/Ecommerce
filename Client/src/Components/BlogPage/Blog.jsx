import React, {useContext } from "react";
import { BlogContext } from "../../Contexts/BlogContext/BlogProvider";

const Blog = () => {

  const {blogs,loading,error}=useContext(BlogContext)

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        <p className="text-2xl font-semibold">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        <p className="text-2xl font-semibold text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-orange-50 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
        >
          <img
            src={`http://localhost:8080${blog.imageUrl}`}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-6">
            <h3 className="font-bold text-xl text-gray-800 mb-2 truncate">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-base mb-4 line-clamp-3">
              {blog.content}
            </p>

            <a
              href="#"
              className="font-semibold text-orange-500 hover:text-orange-700 transition-colors duration-200"
            >
              Read Blog →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
