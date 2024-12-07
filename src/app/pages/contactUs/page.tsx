import Contact_Us_Accordion from "@/_components/ContactUs/Contact_Us_Accordion";
import Contact_Us_Map from "@/_components/ContactUs/Contact_Us_Map/Contact_Us_Map";
import ContactUs_Components from "@/_components/ContactUs/ContactUs_Components";

const page = () => {
    return (
        <div className="poppins">
            <ContactUs_Components/>
            <Contact_Us_Map/>
            <Contact_Us_Accordion/>
        </div>
    );
};

export default page;