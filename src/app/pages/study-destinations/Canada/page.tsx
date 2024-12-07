'use client'
import AnimatedText from '@/_components/StudyDestinationComponents/Shared/Components/AnimatedText/AnimatedText';
import Counselor from '@/_components/StudyDestinationComponents/Shared/Components/Counselor/Counselor';
import Exams from '@/_components/StudyDestinationComponents/Shared/Components/Exams/Exams';
import FAQ from '@/_components/StudyDestinationComponents/Shared/Components/FAQ/FAQ';
import QuickFacts from '@/_components/StudyDestinationComponents/Shared/Components/QuickFacts/QuickFacts';
import RequirementCard from '@/_components/StudyDestinationComponents/Shared/Components/RequirementCard/RequirementCard';
import Tabs from '@/_components/StudyDestinationComponents/Shared/Components/Tabs/Tabs';
import Car from '@/_components/StudyDestinationComponents/Shared/SecondBanners/Car/Car';
// import UniversityCards from '@/_components/StudyDestinationComponents/Shared/Components/UniversityCards/UniversityCards';
import University_Required_Docs from '@/_components/StudyDestinationComponents/Shared/Components/UniversityRequiredDocs/University_Required_Docs';
import GuidanceBanner from '@/_components/StudyDestinationComponents/Shared/Guidence/GuidenceBanner';
import Doc1 from '@/_components/StudyDestinationComponents/Canada/SVG/Doc1';
import Doc2 from '@/_components/StudyDestinationComponents/Canada/SVG/Doc2';
import Doc3 from '@/_components/StudyDestinationComponents/Canada/SVG/Doc3';
import FAQCanada from '@/_components/StudyDestinationComponents/Canada/SVG/FAQ';
import React from 'react';
import Banner3 from '@/_components/StudyDestinationComponents/Shared/Banners/Banner3/Banner3';
import Head from 'next/head';

const page = () => {
    return (
        <div>
            <Head>
                <title>Study in the Canada</title>
                <meta name="description" content="Learn from the world's best academics and study at prestigious Canadian universities." />
                <meta name="keywords" content="Study in Canada, Canadian Universities, Study Abroad" />
            </Head>
            <Banner3 country='Canada' />
            <Car country='Canada' description={`Learn from some of the ${`world's`} best academics and experts in some of ${`world’s`} most prestigious universities and benefit from their exceptional academic support. Study alongside some of the finest and brilliant minds and hone your skills using state-of-the-art technology. Avail placements, internships and volunteering positions that are your right fit through strong industry links of Canada universities and apply your knowledge and skills in a real-world professional environment. Graduate with skills and expertise that are in high demand around the world and get hired by your dream employers. `} bgColor='bg-[#06400a]' />
            <QuickFacts country='Canada' />
            <Tabs country='Canada' />
            <AnimatedText country="Canada" />
            {/* <UniversityCards country='Canada'  /> */}
            <RequirementCard country={"Canada"} />
            <Exams country='Canada' />
            <GuidanceBanner />
            <University_Required_Docs country='Canada' doc1={Doc1} doc2={Doc2} doc3={Doc3} />
            <FAQ bgColor={"bg-[#1A1A1A]"} FAQimg={FAQCanada} country='Canada' />
            <Counselor country='Canada' bgColor='linear-gradient(77deg, rgba(60,100,68,1) 0%, rgba(4,45,7,1) 100%)' />

        </div>
    );
};

export default page;