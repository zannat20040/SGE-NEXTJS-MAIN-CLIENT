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
import Doc1 from '@/_components/StudyDestinationComponents/USA/SVG/Doc1';
import Doc2 from '@/_components/StudyDestinationComponents/USA/SVG/Doc2';
import Doc3 from '@/_components/StudyDestinationComponents/USA/SVG/Doc3';
import FAQUSA from '@/_components/StudyDestinationComponents/USA/SVG/FAQ';
import React from 'react';
import Banner1 from '@/_components/StudyDestinationComponents/Shared/Banners/Banner1/Banner1';

const page = () => {
    return (
        <div>
            <title>Study in the USA and build your future</title>
            <meta name="description" content="Learn from the world's best academics and study at prestigious USA universities." />
            <meta name="keywords" content="Study in USA, USA Universities, Study Abroad" />
            <Banner1 country='USA' />
            <Tower country='USA' description={`Learn from some of the ${`world's`} best academics and experts in some of ${`world’s`} most prestigious universities and benefit from their exceptional academic support. Study alongside some of the finest and brilliant minds and hone your skills using state-of-the-art technology. Avail placements, internships and volunteering positions that are your right fit through strong industry links of USA universities and apply your knowledge and skills in a real-world professional environment. Graduate with skills and expertise that are in high demand around the world and get hired by your dream employers.`} />
            <QuickFacts country='USA' />
            <Tabs country='USA' />
            <AnimatedText country="USA" />
            {/* <UniversityCards country='USA'  /> */}
            <RequirementCard country={"USA"} />
            <Exams country='USA' />
            <GuidanceBanner />
            <University_Required_Docs country='USA' doc1={Doc1} doc2={Doc2} doc3={Doc3} />
            <FAQ bgColor={"bg-[#1A1A1A]"} FAQimg={FAQUSA} country='USA' />
            <Counselor country='USA' bgColor='linear-gradient(93deg, rgb(168, 93, 43) 0%, rgb(167,77,15) 100%)' />

        </div>
    );
};

export default page;