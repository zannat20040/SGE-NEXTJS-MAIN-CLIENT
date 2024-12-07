import Event_Study from "@/_components/Events/Event_Study/Event_Study";
import Event_Subscribe from "@/_components/Events/Event_Subscribe/Event_Subscribe";
import UpcomingEvents_EducationFair from "@/_components/Events/UpcomingEvents_EducationFair/UpcomingEvents_EducationFair";
import UpcomingEvents_PastEvents from "@/_components/Events/UpcomingEvents_PastEvents/UpcomingEvents_PastEvents";

const page = () => {
    return (
        <div className="font-poppins">
            <UpcomingEvents_EducationFair />
            <UpcomingEvents_PastEvents />
            <Event_Subscribe />
            <Event_Study />
        </div>
    );
};

export default page;