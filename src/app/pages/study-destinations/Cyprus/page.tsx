'use client'
import AnimatedText from '@/_components/StudyDestinationComponents/Shared/Components/AnimatedText/AnimatedText';
import Counselor from '@/_components/StudyDestinationComponents/Shared/Components/Counselor/Counselor';
import Exams from '@/_components/StudyDestinationComponents/Shared/Components/Exams/Exams';
import FAQ from '@/_components/StudyDestinationComponents/Shared/Components/FAQ/FAQ';
import QuickFacts from '@/_components/StudyDestinationComponents/Shared/Components/QuickFacts/QuickFacts';
import RequirementCard from '@/_components/StudyDestinationComponents/Shared/Components/RequirementCard/RequirementCard';
import Tabs from '@/_components/StudyDestinationComponents/Shared/Components/Tabs/Tabs';
import Tower from '@/_components/StudyDestinationComponents/Shared/SecondBanners/Tower/Tower';
// import UniversityCards from '@/_components/StudyDestinationComponents/Shared/Components/UniversityCards/UniversityCards';
import University_Required_Docs from '@/_components/StudyDestinationComponents/Shared/Components/UniversityRequiredDocs/University_Required_Docs';
import GuidanceBanner from '@/_components/StudyDestinationComponents/Shared/Guidence/GuidenceBanner';
import Doc1 from '@/_components/StudyDestinationComponents/Cyprus/SVG/Doc1';
import Doc2 from '@/_components/StudyDestinationComponents/Cyprus/SVG/Doc2';
import Doc3 from '@/_components/StudyDestinationComponents/Cyprus/SVG/Doc3';
import FAQCyprus from '@/_components/StudyDestinationComponents/Cyprus/SVG/FAQ';
import React from 'react';
import Banner1 from '@/_components/StudyDestinationComponents/Shared/Banners/Banner1/Banner1';
import Head from 'next/head';

const page = () => {
    return (
        <div>
            <Head>
                <title>Study in the Cyprus</title>
                <meta name="description" content="Learn from the world's best academics and study at prestigious Cyprus universities." />
                <meta name="keywords" content="Study in Cyprus, Cyprus Universities, Study Abroad" />
            </Head>
            <Banner1 country='Cyprus' />
            <Tower country='Cyprus' description={`Learn from some of the ${`world's`} best academics and experts in some of ${`world’s`} most prestigious universities and benefit from their exceptional academic support. Study alongside some of the finest and brilliant minds and hone your skills using state-of-the-art technology. Avail placements, internships and volunteering positions that are your right fit through strong industry links of Cyprus universities and apply your knowledge and skills in a real-world professional environment. Graduate with skills and expertise that are in high demand around the world and get hired by your dream employers.`} />
            <QuickFacts country='Cyprus' />
            <Tabs country='Cyprus' />
            <AnimatedText country="Cyprus" />
            {/* <UniversityCards country='Cyprus'  /> */}
            <RequirementCard country={"Cyprus"} />
            <Exams country='Cyprus' />
            <GuidanceBanner />
            <University_Required_Docs country='Cyprus' doc1={Doc1} doc2={Doc2} doc3={Doc3} />
            <FAQ bgColor={"bg-[#1A1A1A]"} FAQimg={FAQCyprus} country='Cyprus' />
            <Counselor country='Cyprus' bgColor='linear-gradient(264deg, rgba(105,42,0,1) 0%, rgba(73,29,0,1) 100%)' />

        </div>
    );
};

export default page;