'use client'
import AnimatedText from '@/_components/StudyDestinationComponents/Shared/Components/AnimatedText/AnimatedText';
import Counselor from '@/_components/StudyDestinationComponents/Shared/Components/Counselor/Counselor';
import Exams from '@/_components/StudyDestinationComponents/Shared/Components/Exams/Exams';
import FAQ from '@/_components/StudyDestinationComponents/Shared/Components/FAQ/FAQ';
import QuickFacts from '@/_components/StudyDestinationComponents/Shared/Components/QuickFacts/QuickFacts';
import RequirementCard from '@/_components/StudyDestinationComponents/Shared/Components/RequirementCard/RequirementCard';
import Tabs from '@/_components/StudyDestinationComponents/Shared/Components/Tabs/Tabs';
// import UniversityCards from '@/_components/StudyDestinationComponents/Shared/Components/UniversityCards/UniversityCards';
import University_Required_Docs from '@/_components/StudyDestinationComponents/Shared/Components/UniversityRequiredDocs/University_Required_Docs';
import GuidanceBanner from '@/_components/StudyDestinationComponents/Shared/Guidence/GuidenceBanner';
import Doc1 from '@/_components/StudyDestinationComponents/Australia/SVG/Doc1';
import Doc2 from '@/_components/StudyDestinationComponents/Australia/SVG/Doc2';
import Doc3 from '@/_components/StudyDestinationComponents/Australia/SVG/Doc3';
import FAQAustralia from '@/_components/StudyDestinationComponents/Australia/SVG/FAQ';
import React from 'react';
import Banner2 from '@/_components/StudyDestinationComponents/Shared/Banners/Banner2/Banner2';
import Car from '../../../../_components/StudyDestinationComponents/Shared/SecondBanners/Car/Car'
import Head from 'next/head';
const page = () => {
    return (
        <div>
            <Head>
                <title>Study in Australia</title>
                <meta name="description" content="Learn from the world's best academics and study at prestigious Australian universities." />
                <meta name="keywords" content="Study in Australia, Australian Universities, Study Abroad" />
            </Head>
            <Banner2 country='Australia' />
            <Car country='Australia' bgColor='bg-[#191F2C]' description={`Learn from some of the ${`world's`} best academics and experts in some of ${`world’s`} most prestigious universities and benefit from their exceptional academic support. Study alongside some of the finest and brilliant minds and hone your skills using state-of-the-art technology. Avail placements, internships and volunteering positions that are your right fit through strong industry links of Australia universities and apply your knowledge and skills in a real-world professional environment. Graduate with skills and expertise that are in high demand around the world and get hired by your dream employers.`} />
            <QuickFacts country='Australia' />
            <Tabs country='Australia' />
            <AnimatedText country="Australia" />
            {/* <UniversityCards country='Australia'  /> */}
            <RequirementCard country={"Australia"} />
            <Exams country='Australia' />
            <GuidanceBanner />
            <University_Required_Docs country='Australia' doc1={Doc1} doc2={Doc2} doc3={Doc3} />
            <FAQ bgColor={"bg-[#1A1A1A]"} FAQimg={FAQAustralia} country='Australia' />
            <Counselor country='Australia' bgColor='linear-gradient(351deg, rgba(8,4,100,1) 0%, rgba(36,31,170,1) 100%)' />

        </div>
    );
};

export default page;