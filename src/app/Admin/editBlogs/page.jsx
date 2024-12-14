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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      {blogs &&
        blogs.length > 0 &&
        blogs?.map((blog) => (
          <div
            key={blog._id}
            className="flex justify-between   rounded-md overflow-hidden shadow-lg bg-white"
          >
            <div className="w-2/5 ">
              <img className="w-full h-full" src={blog?.img} alt={blog?.title} />
            </div>
            <div className="flex flex-col w-full px-3 py-3">
              <div className="">
                <div className="font-bold  ">{blog?.title}</div>
                <p className="text-gray-700 text-sm">{blog?.createdBy}</p>
                <p className="text-gray-700 text-xs">
                  {blog?.date.split("T")[0]}
                </p>
              </div>
              <div className=" flex justify-end gap-2">
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
          </div>
        ))}
    </div>
  );
}
