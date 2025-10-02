import React, { useContext } from "react";
import { BlogContext } from "../../Contexts/BlogContext/BlogProvider";

export default function AddBlog() {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Add Blog</h2>

      <form className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mt-4">
          <textarea
            name="content"
            placeholder="Content"
            rows={6}
            className="w-full px-4 py-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mt-4 flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="file" accept="image/*" className="hidden" />
            <span className="inline-block px-3 py-2 bg-indigo-600 text-white rounded-md text-sm">
              Choose Image
            </span>
          </label>

          <button
            type="submit"
            className="ml-auto px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Add Blog
          </button>
        </div>
      </form>

      <h3 className="text-xl font-medium mb-4">Blogs ({blogs?.length || 0})</h3>

      <div className="space-y-4">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white shadow rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-3"
            >
              <div className="md:col-span-1">
                {blog.imageUrl ? (
                  <img
                    src={`http://localhost:8080${blog.imageUrl}`}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>

              <div className="p-4 md:col-span-2">
                <h4 className="text-lg font-semibold mb-1">{blog.title}</h4>
                <p className="text-gray-700 mb-3 line-clamp-3">
                  {blog.content}
                </p>
                <div className="text-xs text-gray-400">{blog.date}</div>
              </div>
            </article>
          ))
        ) : (
          <p className="text-gray-500">No blogs yet.</p>
        )}
      </div>
    </div>
  );
}
