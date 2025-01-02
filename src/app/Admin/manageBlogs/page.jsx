"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Image from "next/image";
import Link from "next/link";

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

  

  const handleDelete = (id) => {
    swal({
      title: "Are you sure you want to delete this blog?",
      text: "Once deleted, you will not be able to recover this blog!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const response = await axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/blog/deleteBlog/${id}`
          );

          if (response.status === 200) {
            swal("Your blog has been deleted successfully!", {
              icon: "success",
            });
            setBlogs((prevBlogs) =>
              prevBlogs.filter((blog) => blog._id !== id)
            ); // Update the UI
          } else {
            swal("Failed to delete the blog.", {
              icon: "error",
            });
          }
        } catch (error) {
          console.error("Error deleting blog:", error.message);
          swal("An error occurred while deleting the blog.", {
            icon: "error",
          });
        }
      } else {
        swal("Your blog is still safe!");
      }
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(blogs)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      {blogs &&
        blogs.length > 0 &&
        blogs?.map((blog) => (
          <div
            key={blog._id}
            className="flex justify-between   rounded-md overflow-hidden shadow-lg bg-white"
          >
            <div className="w-2/5 h-[100px]">
              <Image
                width={100}
                height={100}
                className="w-full image-full"
                src={blog?.img}
                alt="Description of the image"
              />
            </div>
            <div className="flex flex-col w-full px-3 py-3">
              <div className="">
                <div className="font-bold  ">{blog?.title}</div>
                <p className="text-gray-700 text-sm">{blog?.createdBy}</p>
                <p className="text-gray-700 text-xs">
                  {blog?.date.split("T")[0]}
                </p>
              </div>
              <div className=" flex justify-end gap-2 mt-4">
                <Link href={`/admin/editBlog/${blog?.url}`}>
                  <button
                    className="bg-blue-900 text-white py-1 px-3 rounded hover:bg-blue-700 duration-300"
                  >
                    Edit
                  </button>
                </Link>
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
