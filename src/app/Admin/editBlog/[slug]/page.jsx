"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Slide, toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function EditBlog({ params }) {
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
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true); // For indicating data fetch
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const blogSlug = params?.slug;
  const router = useRouter();

  // Fetch the blog data by ID
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/blog/getBlogBySlug/${blogSlug}`
        );
        console.log(response.data);
        setFormValues(response.data.blog); // Assuming API returns the blog data as an object
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Failed to load blog data",
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Slide,
            style: { zIndex: 999999999 },
          }
        );
      } finally {
        setIsFetching(false);
      }
    };

    fetchBlogData();
  }, [apiUrl, blogSlug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      ...formValues,
      date: new Date().toISOString(),
    };

    try {
      await axios.put(`${apiUrl}/blog/editBlog/${blogSlug}`, formData);
      toast.success("Your blog has been updated successfully.", {
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

      router.push("/admin/manageBlogs");
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
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching)
    return <p className="p-6 text-center italic text-lg">Fetching data....</p>;

  return (
    <div className="max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-xl rounded-t-lg p-3 px-6 text-center font-bold mb-4 bg-blue-900 text-white">
        Update a This Post
      </h1>
      <form onSubmit={handleEdit}>
        <div className="p-6 space-y-3">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                placeholder="Enter the title of the blog"
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
                placeholder="Enter a subtitle for the blog"
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
              placeholder="Provide a detailed description. Atleast 10 character must."
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
              htmlFor="metaDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Meta Description
            </label>
            <textarea
              placeholder="Provide a short meta description for SEO"
              id="metaDescription"
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
              placeholder="Enter the image URL"
              type="url"
              id="img"
              name="img"
              value={formValues.img}
              onChange={handleChange}
              className="outline-0 rounded focus:border-blue-900 block w-full border border-gray-300 py-2 px-3"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="pageTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Page Title
              </label>
              <input
                placeholder="Enter the page title"
                type="text"
                id="pageTitle"
                name="pageTitle"
                value={formValues.pageTitle}
                onChange={handleChange}
                className="outline-0 rounded focus:border-blue-900 block w-full border border-gray-300 py-2 px-3"
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
                placeholder="Enter the page URL. Avaid hyphen"
                type="text"
                id="url"
                name="url"
                value={formValues.url}
                onChange={handleChange}
                className="outline-0 rounded focus:border-blue-900 block w-full border border-gray-300 py-2 px-3"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="createdBy"
                className="block text-sm font-medium text-gray-700"
              >
                Created By
              </label>
              <input
                placeholder="Enter the creator's name"
                type="text"
                id="createdBy"
                name="createdBy"
                value={formValues.createdBy}
                onChange={handleChange}
                className="outline-0 rounded focus:border-blue-900 block w-full border border-gray-300 py-2 px-3"
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
                placeholder="Enter the blog category"
                type="text"
                id="category"
                name="category"
                value={formValues.category}
                onChange={handleChange}
                className="outline-0 rounded focus:border-blue-900 block w-full border border-gray-300 py-2 px-3"
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
                placeholder="Enter reading time in minutes"
                type="number"
                id="readingTime"
                name="readingTime"
                value={formValues.readingTime}
                onChange={handleChange}
                className="outline-0 rounded focus:border-blue-900 block w-full border border-gray-300 py-2 px-3"
                min="1"
                required
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`text-center w-full rounded-t-none rounded-lg px-6 py-3 ${
            isLoading
              ? "bg-gray-500  cursor-not-allowed"
              : "bg-blue-900 text-white hover:bg-gray-500"
          } duration-500 uppercase tracking-wider font-medium text-sm`}
        >
          {isLoading ? "Updating..." : "Update this blog"}
        </button>
      </form>
    </div>
  );
}
