"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all blogs data when the component is mounted
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/blog/getAllBlogs`
        );
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleEdit = (id) => {
    console.log("Edit blog with ID:", id);
  };

  const handleDelete = async (id) => {
    console.log("deleting blog:", id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("blog======>", blogs);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {blogs &&
        blogs.length > 0 &&
        blogs?.map((blog) => (
          <div
            key={blog._id}
            className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white"
          >
            <img
              className="w-full h-48 object-cover"
              src={blog?.img}
              alt={blog?.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{blog?.title}</div>
              <p className="text-gray-700 text-base">{blog?.createdBy}</p>
              <p className="text-gray-700 text-base">{blog?.date.split('T')[0]}</p>
            </div>
            <div className="px-6 py-4 flex justify-end gap-2">
              <button
                onClick={() => handleEdit(blog?._id)}
                className="bg-blue-900 text-white py-1 px-3 rounded hover:bg-blue-700 duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog?._id)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
