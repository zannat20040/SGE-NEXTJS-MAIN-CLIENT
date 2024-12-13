"use client";
import axios from "axios";
import React, { useState } from "react";
import { Slide, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function DestinationForm() {
  const [formData, setFormData] = useState({
    destinationTitle: "",
    destinationDescription: "",
    whyStudyTitle: "",
    whyStudyDescription: "",
    quickFacts: [],
    popularIn: [],
    topUniversity: [],
    studyRequirement: [],
    examRequirement: [],
    documentRequirement: "",
    statement: "",
    applyDocument: "",
    faq: [],
    expertNumber: "",
    destinationName: "",
    url: "",
    pageTitle: "",
    meta: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form Data Submitted:", formData);
    // alert("Form Submitted! Check the console for details.");
    try {
      // Make sure to pass 'data' in the request body
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/destination/createDestination`,
        formData
      );

      // Display success toast notification
      toast.success("Your new Destination added successfully.", {
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
          errMessage =
            errorData.message || "Something went wrong. Please try again.";
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

  // fact

  const handleQuickFactChange = (e, index) => {
    const updatedFacts = [...formData.quickFacts];
    updatedFacts[index] = e.target.value;
    setFormData({ ...formData, quickFacts: updatedFacts });
  };

  const addQuickFact = () => {
    setFormData({ ...formData, quickFacts: [...formData.quickFacts, ""] });
  };

  const removeQuickFact = (index) => {
    const updatedFacts = formData.quickFacts.filter((_, i) => i !== index);
    setFormData({ ...formData, quickFacts: updatedFacts });
  };

  // popular

  const handlePopularChange = (e, index) => {
    const updatedPopular = [...formData.popularIn];
    updatedPopular[index] = e.target.value;
    setFormData({ ...formData, popularIn: updatedPopular });
  };

  const addPopular = () => {
    setFormData({ ...formData, popularIn: [...formData.popularIn, ""] });
  };

  const removePopular = (index) => {
    const updatedPopular = formData.popularIn.filter((_, i) => i !== index);
    setFormData({ ...formData, popularIn: updatedPopular });
  };

  // university

  const handleUniversityChange = (e, index, field) => {
    const updatedUniversities = [...formData.topUniversity];
    updatedUniversities[index] = {
      ...updatedUniversities[index],
      [field]: e.target.value,
    };
    setFormData({ ...formData, topUniversity: updatedUniversities });
  };

  const addUniversity = () => {
    const newUniversity = {
      img: "",
      name: "",
      desc: "",
      subtitle: "",
      location: "",
    };
    setFormData({
      ...formData,
      topUniversity: [...formData.topUniversity, newUniversity],
    });
  };

  const removeUniversity = (index) => {
    const updatedUniversities = formData.topUniversity.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, topUniversity: updatedUniversities });
  };

  // requirement

  const handleRequirementChange = (e, index, field) => {
    const updatedRequirements = [...formData.studyRequirement];
    updatedRequirements[index] = {
      ...updatedRequirements[index],
      [field]: e.target.value,
    };
    setFormData({ ...formData, studyRequirement: updatedRequirements });
  };

  const addRequirement = () => {
    const newRequirement = {
      title: "",
      description: "",
      img: "",
    };
    setFormData({
      ...formData,
      studyRequirement: [...formData.studyRequirement, newRequirement],
    });
  };

  const removeRequirement = (index) => {
    const updatedRequirements = formData.studyRequirement.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, studyRequirement: updatedRequirements });
  };

  // exam requirement

  const handleExamChange = (e, index, field) => {
    const updatedExams = [...formData.examRequirement];
    updatedExams[index] = {
      ...updatedExams[index],
      [field]: e.target.value,
    };
    setFormData({ ...formData, examRequirement: updatedExams });
  };

  const addExam = () => {
    const newExam = {
      title: "",
      description: "",
    };
    setFormData({
      ...formData,
      examRequirement: [...formData.examRequirement, newExam],
    });
  };

  const removeExam = (index) => {
    const updatedExams = formData.examRequirement.filter((_, i) => i !== index);
    setFormData({ ...formData, examRequirement: updatedExams });
  };

  // faq

  const handleFAQChange = (e, index, field) => {
    const updatedFAQ = [...formData.faq];
    updatedFAQ[index] = {
      ...updatedFAQ[index],
      [field]: e.target.value,
    };
    setFormData({ ...formData, faq: updatedFAQ });
  };

  const addFAQ = () => {
    const newFAQ = {
      question: "",
      answer: "",
    };
    setFormData({ ...formData, faq: [...formData.faq, newFAQ] });
  };

  const removeFAQ = (index) => {
    const updatedFAQ = formData.faq.filter((_, i) => i !== index);
    setFormData({ ...formData, faq: updatedFAQ });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Destination Page</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        {/* Country */}
        <div>
          <h2 className="text-lg font-semibold">Destination Name</h2>
          <input
            required
            type="text"
            name="destinationName"
            value={formData.destinationName}
            onChange={handleChange}
            placeholder="Destination Name"
            className="w-full border rounded p-2"
          />
        </div>

        {/* banner & why study */}
        <div className="grid grid-cols-2 gap-5 justify-between ">
          {/* Destination Banner */}
          <div>
            <h2 className="text-lg font-semibold">Destination Banner</h2>
            <input
              required
              type="text"
              name="destinationTitle"
              value={formData.destinationTitle}
              onChange={handleChange}
              placeholder="Title"
              className="w-full border rounded p-2 mb-2"
            />
            <textarea
              required
              name="destinationDescription"
              value={formData.destinationDescription}
              onChange={handleChange}
              placeholder="Description"
              className="w-full border rounded p-2"
            ></textarea>
          </div>

          {/* Why Study */}
          <div>
            <h2 className="text-lg font-semibold">Why Study</h2>
            <input
              required
              type="text"
              name="whyStudyTitle"
              value={formData.whyStudyTitle}
              onChange={handleChange}
              placeholder="Title"
              className="w-full border rounded p-2 mb-2"
            />
            <textarea
              required
              name="whyStudyDescription"
              value={formData.whyStudyDescription}
              onChange={handleChange}
              placeholder="Description"
              className="w-full border rounded p-2"
            ></textarea>
          </div>
        </div>

        {/* quick fact & popular in */}
        <div className="grid grid-cols-2 gap-5 justify-between ">
          {/* Quick Facts */}
          <div>
            <div className="flex justify-between gap-5 items-center mb-3">
              <h2 className="text-lg font-semibold">Quick Facts</h2>
              <button
                type="button"
                onClick={addQuickFact}
                className="bg-blue-900 text-white px-4 py-2 rounded mt-2"
              >
                Add facts
              </button>
            </div>
            {formData.quickFacts.map((fact, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <input
                  required
                  type="text"
                  value={fact}
                  onChange={(e) => handleQuickFactChange(e, index)}
                  placeholder={`Fact ${index + 1}`}
                  className="w-full border rounded p-2"
                />
                <button
                  type="button"
                  onClick={() => removeQuickFact(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Popular In */}
          <div>
            <div className="flex justify-between gap-5  mb-3">
              <h2 className="text-lg font-semibold">Popular In</h2>
              <button
                type="button"
                onClick={addPopular}
                className="bg-blue-900 text-white px-4 py-2 rounded mt-2"
              >
                Add More Popular
              </button>
            </div>
            {formData?.popularIn?.map((location, index) => (
              <div key={index} className="flex items-center gap-2 mb-2 ">
                <input
                  required
                  type="text"
                  value={location}
                  onChange={(e) => handlePopularChange(e, index)}
                  placeholder={`Popular in ${index + 1}`}
                  className="w-full border rounded p-2"
                />
                <button
                  type="button"
                  onClick={() => removePopular(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Top University */}
        <div>
          <div className="flex justify-between gap-5 items-center mb-3">
            <h2 className="text-lg font-semibold">Top University</h2>
            <button
              type="button"
              onClick={addUniversity}
              className="bg-blue-900 text-white px-4 py-2 rounded mt-2"
            >
              Add University
            </button>
          </div>

          {formData?.topUniversity?.map((university, index) => (
            <div key={index} className="border p-4 rounded mb-4">
              {/* university name & image */}
              <div className="grid grid-cols-2 gap-5 justify-between">
                <div className="mb-2">
                  <input
                    required
                    type="text"
                    value={university.name}
                    onChange={(e) => handleUniversityChange(e, index, "name")}
                    placeholder="University Name"
                    className="w-full border rounded p-2 mb-2"
                  />
                </div>
                <div className="mb-2">
                  <input
                    required
                    type="url"
                    value={university.img}
                    onChange={(e) => handleUniversityChange(e, index, "img")}
                    placeholder="Image URL"
                    className="w-full border rounded p-2 mb-2"
                  />
                </div>
              </div>
              {/* description */}
              <div className="mb-2">
                <textarea
                  required
                  value={university.desc}
                  onChange={(e) => handleUniversityChange(e, index, "desc")}
                  placeholder="Description"
                  className="w-full border rounded p-2 mb-2"
                ></textarea>
              </div>
              {/* subtitle & location */}
              <div className="grid grid-cols-2 gap-5 justify-between">
                <div className="mb-2">
                  <input
                    required
                    type="text"
                    value={university.subtitle}
                    onChange={(e) =>
                      handleUniversityChange(e, index, "subtitle")
                    }
                    placeholder="University Slogan"
                    className="w-full border rounded p-2 mb-2"
                  />
                </div>
                <div className="mb-2">
                  <input
                    required
                    type="text"
                    value={university.location}
                    onChange={(e) =>
                      handleUniversityChange(e, index, "location")
                    }
                    placeholder="Location"
                    className="w-full border rounded p-2 mb-2"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeUniversity(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Study Requirement */}
        <div>
          <div className="flex justify-between gap-5 items-center">
            <h2 className="text-lg font-semibold">Study Requirement</h2>
            <button
              type="button"
              onClick={addRequirement}
              className="bg-blue-900 text-white px-4 py-2 rounded mt-2"
            >
              Add Study Requirement
            </button>
          </div>
          {formData.studyRequirement.map((requirement, index) => (
            <div key={index} className="border p-4 rounded mb-4">
              <div className="grid grid-cols-2 gap-5 justify-between">
                <div className="mb-2">
                  <input
                    required
                    type="text"
                    value={requirement.title}
                    onChange={(e) => handleRequirementChange(e, index, "title")}
                    placeholder="Title"
                    className="w-full border rounded p-2 mb-2"
                  />
                </div>
                <div className="mb-2">
                  <input
                    required
                    type="text"
                    value={requirement.img}
                    onChange={(e) => handleRequirementChange(e, index, "img")}
                    placeholder="Image URL"
                    className="w-full border rounded p-2 mb-2"
                  />
                </div>
              </div>
              <div className="mb-2">
                <textarea
                  required
                  value={requirement.description}
                  onChange={(e) =>
                    handleRequirementChange(e, index, "description")
                  }
                  placeholder="Description"
                  className="w-full border rounded p-2 mb-2"
                ></textarea>
              </div>

              <button
                type="button"
                onClick={() => removeRequirement(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Exam Requirement */}
        <div>
          <div className="flex justify-between items-center gap-5">
            <h2 className="text-lg font-semibold">Exam Requirement</h2>
            <button
              type="button"
              onClick={addExam}
              className="bg-blue-900 text-white px-4 py-2 rounded mt-2"
            >
              Add Exam Requirement
            </button>
          </div>
          {formData.examRequirement.map((exam, index) => (
            <div key={index} className="border p-4 rounded mb-4">
              <div className="mb-2">
                <input
                  required
                  type="text"
                  value={exam.title}
                  onChange={(e) => handleExamChange(e, index, "title")}
                  placeholder="Title"
                  className="w-full border rounded p-2 mb-2"
                />
              </div>
              <div className="mb-2">
                <textarea
                  required
                  value={exam.description}
                  onChange={(e) => handleExamChange(e, index, "description")}
                  placeholder="Description"
                  className="w-full border rounded p-2 mb-2"
                ></textarea>
              </div>
              <button
                type="button"
                onClick={() => removeExam(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Document Requirement */}
        <div>
          <h2 className="text-lg font-semibold">Document Requirement</h2>
          <textarea
            required
            name="documentRequirement"
            value={formData.documentRequirement}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border rounded p-2"
          ></textarea>
        </div>

        {/* Statement */}
        <div>
          <h2 className="text-lg font-semibold">Statement</h2>
          <textarea
            required
            name="statement"
            value={formData.statement}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border rounded p-2"
          ></textarea>
        </div>

        {/* Apply Document */}
        <div>
          <h2 className="text-lg font-semibold">Apply Document</h2>
          <textarea
            required
            name="applyDocument"
            value={formData.applyDocument}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border rounded p-2"
          ></textarea>
        </div>

        {/* FAQ */}
        <div>
          <div className="flex justify-between gap-5 items-center mb-2">
            <h2 className="text-lg font-semibold">FAQ</h2>
            <button
              type="button"
              onClick={addFAQ}
              className="bg-blue-900 text-white px-4 py-2 rounded mt-2"
            >
              Add FAQ
            </button>
          </div>
          {formData.faq.map((faqItem, index) => (
            <div
              key={index}
              className="border p-4 rounded mb-4 flex justify-center items-center gap-x-5"
            >
              <input
                required
                type="text"
                value={faqItem.question}
                onChange={(e) => handleFAQChange(e, index, "question")}
                placeholder="Question"
                className="w-full border rounded p-2 "
              />

              <input
                required
                type="text"
                value={faqItem.answer}
                onChange={(e) => handleFAQChange(e, index, "answer")}
                placeholder="Answer"
                className="w-full border rounded p-2 "
              />
              <button
                type="button"
                onClick={() => removeFAQ(index)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Expert Number */}
        <div>
          <h2 className="text-lg font-semibold">Expert Number</h2>
          <input
            required
            type="number"
            name="expertNumber"
            value={formData.expertNumber}
            onChange={handleChange}
            placeholder="Expert Number"
            className="w-full border rounded p-2"
          />
        </div>

        {/* URL */}
        <div>
          <h2 className="text-lg font-semibold">URL</h2>
          <input
            required
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="URL"
            className="w-full border rounded p-2"
          />
        </div>

        {/* Page Title */}
        <div>
          <h2 className="text-lg font-semibold">Page Title</h2>
          <input
            required
            type="text"
            name="pageTitle"
            value={formData.pageTitle}
            onChange={handleChange}
            placeholder="Page Title"
            className="w-full border rounded p-2"
          />
        </div>

        {/* Meta */}
        <div>
          <h2 className="text-lg font-semibold">Meta Description</h2>
          <textarea
            required
            name="meta"
            value={formData.meta}
            onChange={handleChange}
            placeholder="Meta Information"
            className="w-full border rounded p-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-900 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
