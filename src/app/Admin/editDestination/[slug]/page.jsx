"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function page() {
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
  const destinationSlug = params?.slug;
  const router = useRouter();

  
  useEffect(() => {
    const fetchDestinationData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/destination/getDestinationBySlug/${destination}`
        );
        setFormData(response.data.destination); // Assuming API returns the blog data as an object
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

    fetchDestinationData();
  }, [destinationSlug]);


console.log('formData==>',formData)
console.log('destination slug==>',destinationSlug)

  return <div>page</div>;
}
