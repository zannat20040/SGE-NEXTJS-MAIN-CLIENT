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

  console.log("formData==>", formData);
  console.log("destination slug==>", slug);

  return <div>page</div>;
}
