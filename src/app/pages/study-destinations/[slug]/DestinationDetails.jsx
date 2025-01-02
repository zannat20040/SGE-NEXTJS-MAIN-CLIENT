"use client";
import Doc1 from "@/_components/StudyDestinationComponents/Australia/SVG/Doc1";
import Doc2 from "@/_components/StudyDestinationComponents/Australia/SVG/Doc2";
import Doc3 from "@/_components/StudyDestinationComponents/Australia/SVG/Doc3";
import Banner1 from "@/_components/StudyDestinationComponents/Shared/Banners/Banner1/Banner1";
import AnimatedText from "@/_components/StudyDestinationComponents/Shared/Components/AnimatedText/AnimatedText";
import Counselor from "@/_components/StudyDestinationComponents/Shared/Components/Counselor/Counselor";
import Exams from "@/_components/StudyDestinationComponents/Shared/Components/Exams/Exams";
import FAQ from "@/_components/StudyDestinationComponents/Shared/Components/FAQ/FAQ";
import QuickFacts from "@/_components/StudyDestinationComponents/Shared/Components/QuickFacts/QuickFacts";
import RequirementCard from "@/_components/StudyDestinationComponents/Shared/Components/RequirementCard/RequirementCard";
import Tabs from "@/_components/StudyDestinationComponents/Shared/Components/Tabs/Tabs";
import UniversityCards from "@/_components/StudyDestinationComponents/Shared/Components/UniversityCards/UniversityCards";
import University_Required_Docs from "@/_components/StudyDestinationComponents/Shared/Components/UniversityRequiredDocs/University_Required_Docs";
import GuidanceBanner from "@/_components/StudyDestinationComponents/Shared/Guidence/GuidenceBanner";
import Tower from "@/_components/StudyDestinationComponents/Shared/SecondBanners/Tower/Tower";
import FAQUK from "@/_components/StudyDestinationComponents/UK/SVG/FAQUK";
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
        setError("Failed to load destination", err);
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
      {details?.quickFacts?.length > 0 && (
        <QuickFacts facts={details?.quickFacts} />
      )}
      <Tabs details={details} country={details?.destinationTitle} />
      {details?.popularIn.length > 0 && (
        <AnimatedText
          country={details?.destinationTitle}
          keywords={details?.popularIn}
        />
      )}

      <UniversityCards
        details={details}
        country={details?.destinationTitle}
        universities={details?.topUniversity}
      />

      
      <RequirementCard
        country={details?.destinationTitle}
        requirement={details?.studyRequirement}
      />
      <Exams
        country={details?.destinationTitle}
        examRequirement={details.examRequirement}
      />
      <GuidanceBanner number={details?.expertNumber} />
      <University_Required_Docs
        country={details?.destinationTitle}
        details={details}
        Doc1={Doc1}
        Doc2={Doc2}
        Doc3={Doc3}
      />
      <FAQ
        bgColor={"bg-blue-900"}
        FAQimg={FAQUK}
        country={details?.destinationTitle}
        details={details?.faq}
      />
      <Counselor
        number={details?.expertNumber}
        country={details?.destinationTitle}
        bgColor="linear-gradient(93deg, rgba(50,135,253,1) 0%, rgba(2,28,229,1) 100%)"
      />
    </div>
  );
}
