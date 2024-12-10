"use client";

import axios from "axios";
import { Slide, toast } from "react-toastify";

export default function CreateBlogs() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Collect form data
    const formData = {
      title: e.target.title.value,
      subtitle: e.target.subtitle.value,
      pageTitle: e.target.pageTitle.value,
      url: e.target.url.value,
      createdBy: e.target.createdBy.value,
      category: e.target.category.value,
      readingTime: e.target.readingTime.value,
      img: e.target.img.value,
      description: e.target.description.value,
      metaDescription: e.target.meta.value,
      date: new Date().toISOString(), // Auto-generate date
    };
  
    console.log("Form Submitted Data:", formData);
  
    try {
      // Make sure to pass 'data' in the request body
      await axios.post(`${apiUrl}/blog/createBlog`, formData);
      console.log("success");
  
      toast.success("Your blog posted successfully.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        style: { zIndex: 999999999 },
      });
    } catch (error) {
      let errMessage = "An unknown error occurred"; // Default message
  
      if (error.response) {
        // Check if error.response and error.response.data exist
        const errorData = error.response.data;
  
        if (errorData.errors && errorData.errors.length > 0) {
          // If errors array is available and not empty, get the first error message
          errMessage = errorData.errors.join(", ");
        } else {
          // Handle other 400 errors with specific message
          errMessage = errorData.message || "Something went wrong. Please try again.";
        }
      } else {
        // If no response data, fallback to error.message
        errMessage = error.message || errMessage;
      }
  
      // Show the error message as a toast
      toast.error(errMessage, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        style: { zIndex: 999999999 },
      });
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title + Subtitle in 1 Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="block w-full border border-gray-300 rounded-md py-2 px-3"
              // required
            />
          </div>
          <div>
            <label
              htmlFor="subtitle"
              className="block text-sm font-medium text-gray-700"
            >
              Subtitle
            </label>
            <input
              type="text"
              id="subtitle"
              name="subtitle"
              className="block w-full border border-gray-300 rounded-md py-2 px-3"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="block w-full border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>

        <div>
          <label
            htmlFor="meta"
            className="block text-sm font-medium text-gray-700"
          >
            Meta Description
          </label>
          <input
            type="text"
            id="meta"
            name="meta"
            className="block w-full border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>

        {/* Image Link */}
        <div>
          <label
            htmlFor="img"
            className="block text-sm font-medium text-gray-700"
          >
            Image (Link)
          </label>
          <input
            type="url"
            id="img"
            name="img"
            className="block w-full border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>

        {/* PageTitle + RouteName in 1 Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="pageTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Page Title
            </label>
            <input
              type="text"
              id="pageTitle"
              name="pageTitle"
              className="block w-full border border-gray-300 rounded-md py-2 px-3"
              required
            />
          </div>
          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              URL
            </label>
            <input
              type="text"
              id="url"
              name="url"
              className="block w-full border border-gray-300 rounded-md py-2 px-3"
              required
            />
          </div>
        </div>

        {/* Created By + Category + Reading Time in 1 Row */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="createdBy"
              className="block text-sm font-medium text-gray-700"
            >
              Created By
            </label>
            <input
              type="text"
              id="createdBy"
              name="createdBy"
              className="block w-full border border-gray-300 rounded-md py-2 px-3"
              required
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
              id="category"
              name="category"
              className="block w-full border border-gray-300 rounded-md py-2 px-3"
              required
            />
          </div>
          <div>
            <label
              htmlFor="readingTime"
              className="block text-sm font-medium text-gray-700"
            >
              Reading Time (mins)
            </label>
            <input
              type="number"
              id="readingTime"
              name="readingTime"
              className="block w-full border border-gray-300 rounded-md py-2 px-3"
              min="1"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
