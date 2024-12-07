import Event_Study from "@/_components/Events/Event_Study/Event_Study";
import Event_Subscribe from "@/_components/Events/Event_Subscribe/Event_Subscribe";
import Events_Components from "@/_components/Events/Events_Components/Events_Components";
import UpcomingEvents_PastEvents from "@/_components/Events/UpcomingEvents_PastEvents/UpcomingEvents_PastEvents";

const page = () => {
    return (
        <div>
            <Events_Components/>
            <UpcomingEvents_PastEvents/>
            <Event_Subscribe/>
            <Event_Study/>
        </div>
    );
};

export default page;