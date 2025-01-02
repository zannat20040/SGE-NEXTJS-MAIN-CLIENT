"use client";
import axios from "axios";
import { useRouter } from "next/router";
import React, { use, useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";

export default function page({ params }) {
  const [formData, setFormData] = useState({
    destinationTitle: "",
    destinationDescription: "",
    whyStudyTitle: "",
    whyStudyDescription: "",
    quickFacts: [],
    popularIn: [],
    programDuration: [],
    costOfStudy: [],
    academicIntake: [],
    preparationTime: "",
    topUniversity: [],
    studyRequirement: [],
    examRequirement: [],
    documentDescription: "",
    documentList: [],
    statementDescription: "",
    statementList: [],
    applyDocumentDescription: "",
    applyDocumentList: [],
    faq: [],
    expertNumber: "",
    destinationName: "",
    url: "",
    pageTitle: "",
    meta: "",
    destinationFlag: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true); // For indicating data fetch
  const { slug } = use(params);

  useEffect(() => {
    const fetchDestinationData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/destination/getDestinationBySlug/${slug}`
        );
        console.log("data===>", response.data);
        setFormData(response.data.destination); // Assuming API returns the blog data as an object
      } catch (error) {
        console.log(error);
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

    fetchDestinationData();
  }, [slug]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    try {
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
      console.log(error);
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

  // program duration
  const handleProgramDuration = (e, index, field, value) => {
    const updatedProgramDuration = [...formData.programDuration];
    updatedProgramDuration[index] = {
      ...updatedProgramDuration[index],
      [field]: e.target.value,
    };
    setFormData({ ...formData, programDuration: updatedProgramDuration });
  };
  const addProgramDuration = () => {
    const newProgramDuration = {
      qualification: "",
      duration: "",
      gir: "",
    };
    setFormData({
      ...formData,
      programDuration: [...formData.programDuration, newProgramDuration],
    });
  };
  const removeProgramDuration = (index) => {
    const updatedProgramDuration = formData.programDuration.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, programDuration: updatedProgramDuration });
  };

  // cost of study
  const handleCostOfStudy = (e, index, field, value) => {
    const updateCostOfStudy = [...formData.costOfStudy];
    updateCostOfStudy[index] = {
      ...updateCostOfStudy[index],
      [field]: e.target.value,
    };
    setFormData({ ...formData, costOfStudy: updateCostOfStudy });
  };
  const addCostOfStudy = () => {
    const newCostOfStudy = {
      degree: "",
      cost: "",
    };
    setFormData({
      ...formData,
      costOfStudy: [...formData.costOfStudy, newCostOfStudy],
    });
  };
  const removeCostOfStudy = (index) => {
    const updatedCostOfStudy = formData.costOfStudy.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, costOfStudy: updatedCostOfStudy });
  };

  // academic Intake
  const handleAcademicIntake = (e, index, field, value) => {
    const updateAcademicIntake = [...formData.academicIntake];
    updateAcademicIntake[index] = {
      ...updateAcademicIntake[index],
      [field]: e.target.value,
    };
    setFormData({ ...formData, academicIntake: updateAcademicIntake });
  };
  const addAcademicIntake = () => {
    const newAcademicIntake = {
      qualification: "",
      duration: "",
    };
    setFormData({
      ...formData,
      academicIntake: [...formData.academicIntake, newAcademicIntake],
    });
  };
  const removeAcademicIntake = (index) => {
    const updatedAcademicIntake = formData.academicIntake.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, academicIntake: updatedAcademicIntake });
  };

  // university
  const handleUniversityChange = (e, index, field, value) => {
    const updatedUniversities = [...formData.topUniversity];
    if (field === "courseList") {
      updatedUniversities[index] = {
        ...updatedUniversities[index],
        [field]: value.split(",").map((item) => item.trim()), // Split comma-separated string into an array
      };
    } else {
      updatedUniversities[index] = {
        ...updatedUniversities[index],
        [field]: e.target.value,
      };
    }
    setFormData({ ...formData, topUniversity: updatedUniversities });
  };
  const addUniversity = () => {
    const newUniversity = {
      img: "",
      name: "",
      desc: "",
      subtitle: "",
      location: "",
      rank: "",
      established: "",
      history: "",
      achievement: "",
      service: "",
      faculty: "",
      accomodation: "",
      fees: "",
      internationalFees: "",
      internationalStudent: "",
      courseList: [],
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
      [field]: e.target.value, // Handles splitting description into an array
    };
    setFormData({ ...formData, examRequirement: updatedExams });
  };
  const addExam = () => {
    const newExam = {
      title: "",
      description: [], // Initialize description as an array
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

  const inputCss = "w-full  rounded p-2 focus:outline-none border-2  ";

  
  return <div>page</div>;
}
