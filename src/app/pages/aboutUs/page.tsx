import AboutUs_components from "@/_components/AboutUs/AboutUs_components";
import AboutUs_MeetOurFounder from "@/_components/AboutUs/AboutUs_MeetOurFounder/AboutUs_MeetOurFounder";
import AboutUs_Thebest from "@/_components/AboutUs/AboutUs_TheBest/AboutUs_TheBest";
import Home_Connection from "@/_components/Home/Home_Connection/Home_Connection";

const page = () => {
    return (
        <div>
            <AboutUs_components />
            <AboutUs_MeetOurFounder />
            <AboutUs_Thebest />
            <div className="pb-20">
                <Home_Connection />
            </div>
        </div>
    );
};

export default page;