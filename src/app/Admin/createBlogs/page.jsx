"use client";

import { useState } from "react";
import axios from "axios";
import { Slide, toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function CreateBlogs() {
  const [formValues, setFormValues] = useState({
    title: "",
    subtitle: "",
    pageTitle: "",
    url: "",
    createdBy: "",
    category: "",
    readingTime: "",
    img: "",
    description: "",
    metaDescription: "",
  });
  const [isFormComplete, setIsFormComplete] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };

      // Check if all fields are filled
      const allFieldsFilled = Object.values(updatedValues).every(
        (field) => field.trim() !== ""
      );

      setIsFormComplete(allFieldsFilled);
      return updatedValues;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      ...formValues,
      date: new Date().toISOString(),
    };

    try {
      await axios.post(`${apiUrl}/blog/createBlog`, formData);
      toast.success("Your blog posted successfully.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Slide,
        style: { zIndex: 999999999 },
      });

      // Reset form after submission
      setFormValues({
        title: "",
        subtitle: "",
        pageTitle: "",
        url: "",
        createdBy: "",
        category: "",
        readingTime: "",
        img: "",
        description: "",
        metaDescription: "",
      });
      setIsFormComplete(false);
      router.push("http://localhost:3000/blogs");
    } catch (error) {
      let errMessage =
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred";

      console.log(error);
      toast.error(errMessage, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Slide,
        style: { zIndex: 999999999 },
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto  bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-xl rounded-t-lg p-3 px-6 text-center font-bold mb-4 bg-blue-900 text-white">
        Create a New Post
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="p-6 space-y-3">
          <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                placeholder="eg:Know about Shabuj Global"
                type="text"
                id="title"
                name="title"
                value={formValues.title}
                onChange={handleChange}
                className="outline-0 rounded focus:border-blue-900 block w-full border border-gray-300 py-2 px-3"
                required
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
                placeholder="eg:Reach Your Dream Destination"
                type="text"
                id="subtitle"
                name="subtitle"
                value={formValues.subtitle}
                onChange={handleChange}
                className="outline-0 rounded focus:border-blue-900 block w-full border border-gray-300 py-2 px-3"
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
            <textarea
              placeholder="Description must be at least 10 characters long"
              id="description"
              name="description"
              value={formValues.description}
              onChange={handleChange}
              className="outline-0 rounded focus:border-blue-900 block w-full border border-gray-300 py-2 px-3"
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
            <textarea
              placeholder="eg:Know about Shabuj Global...."
              id="meta"
              name="metaDescription"
              value={formValues.metaDescription}
              onChange={handleChange}
              className="outline-0 rounded focus:border-blue-900 block w-full border border-gray-300 py-2 px-3"
              required
            />
          </div>
          <div>
            <label
              htmlFor="img"
              className="block text-sm font-medium text-gray-700"
            >
              Image (Link)
            </label>
            <input
              placeholder="eg:www.url.com"
              type="url"
              id="img"
              name="img"
              value={formValues.img}
              onChange={handleChange}
              className="outline-0 rounded focus:border-blue-900 block w-full border border-gray-300 py-2 px-3"
              required
            />
          </div>
          {/* PageTitle + RouteName in 1 Row */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="pageTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Page Title
              </label>
              <input
                placeholder="eg:Know about Shabuj Global - Reach your DreaM Destination"
                type="text"
                value={formValues.pageTitle}
                onChange={handleChange}
                id="pageTitle"
                name="pageTitle"
                className="outline-0 rounded focus:border-blue-900 block w-full border  border-gray-300  py-2 px-3"
                required
              />
            </div>
            <div>
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                Page URL
              </label>
              <input
                placeholder="eg:Know about Shabuj Global. Do not use any hyphen"
                type="text"
                id="url"
                value={formValues.url}
                onChange={handleChange}
                name="url"
                className="outline-0 rounded focus:border-blue-900 block w-full border  border-gray-300  py-2 px-3"
                required
              />
            </div>
          </div>

          {/* Created By + Category + Reading Time in 1 Row */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="createdBy"
                className="block text-sm font-medium text-gray-700"
              >
                Created By
              </label>
              <input
                placeholder="eg:Shabuj Global"
                type="text"
                id="createdBy"
                name="createdBy"
                value={formValues.createdBy}
                onChange={handleChange}
                className="outline-0 rounded focus:border-blue-900 block w-full border  border-gray-300  py-2 px-3"
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
                placeholder="eg:Blog"
                type="text"
                id="category"
                name="category"
                value={formValues.category}
                onChange={handleChange}
                className="outline-0 rounded focus:border-blue-900 block w-full border  border-gray-300  py-2 px-3"
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
                placeholder="eg:4"
                type="number"
                id="readingTime"
                name="readingTime"
                value={formValues.readingTime}
                onChange={handleChange}
                className="outline-0 rounded focus:border-blue-900 block w-full border  border-gray-300  py-2 px-3"
                min="1"
                required
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={!isFormComplete}
          className={`text-center w-full rounded-t-none rounded-lg px-6 py-3 ${
            isFormComplete
              ? "bg-blue-900 text-white hover:bg-gray-500"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          } duration-500 uppercase tracking-wider font-medium text-sm`}
        >
          Post this blog
        </button>
      </form>
    </div>
  );
}
