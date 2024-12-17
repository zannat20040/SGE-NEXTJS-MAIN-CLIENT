"use client";
import Banner1 from "@/_components/StudyDestinationComponents/Shared/Banners/Banner1/Banner1";
import Tower from "@/_components/StudyDestinationComponents/Shared/SecondBanners/Tower/Tower";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DestinationDetails({ slug }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/destination/getDestinationBySlug/${slug}`
        );
        setDetails(response.data.destination);
      } catch (err) {
        setError("Failed to load blog", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  console.log(details);

  return (
    <div>
      <Banner1
        bannerTitle={details?.destinationTitle}
        bannerDescription={details?.destinationDescription}
      />
      <Tower
        title={details?.whyStudyTitle}
        description={details?.whyStudyDescription}
      />
      {/* <QuickFacts country="UK" /> */}
      {/* <Tabs country="UK" /> */}
      {/* <AnimatedText country="UK" /> */}
      {/* <UniversityCards country="UK" /> */}
      {/* <RequirementCard country={"UK"} /> */}
      {/* <Exams country="UK" /> */}
      {/* <GuidanceBanner /> */}
      {/* <University_Required_Docs
        country="UK"
        doc1={Doc1}
        doc2={Doc2}
        doc3={Doc3}
      /> */}
      {/* <FAQ bgColor={"bg-[#1A1A1A]"} FAQimg={FAQUK} country="UK" /> */}
      {/* <Counselor
        country="UK"
        bgColor="linear-gradient(93deg, rgba(50,135,253,1) 0%, rgba(2,28,229,1) 100%)"
      /> */}
    </div>
  );
}
