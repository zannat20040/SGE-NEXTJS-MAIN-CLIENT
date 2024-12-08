// pages/form.js
"use client";

export default function CreateBlogs() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
      title: e.target.title.value,
      subtitle: e.target.subtitle.value,
      pageTitle: e.target.pageTitle.value,
      routeName: e.target.routeName.value,
      createdBy: e.target.createdBy.value,
      category: e.target.category.value,
      readingTime: e.target.readingTime.value,
      img: e.target.img.value,
      date: new Date().toISOString(), // Auto-generate date
    };

    console.log("Form Submitted Data:", formData);

    // Send data to an API endpoint
    // const response = await fetch("/api/submitForm", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    // if (response.ok) {
    //   alert("Form submitted successfully!");
    // } else {
    //   alert("Failed to submit form.");
    // }
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
              type="text"
              id="subtitle"
              name="subtitle"
              className="block w-full border border-gray-300 rounded-md py-2 px-3"
              required
            />
          </div>
        </div>

        {/* Description (Rich Text Editor) */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
     
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
            type="text"
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
              htmlFor="routeName"
              className="block text-sm font-medium text-gray-700"
            >
              Route Name
            </label>
            <input
              type="text"
              id="routeName"
              name="routeName"
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
