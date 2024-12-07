import Blogs_Cards from "@/_components/Blog/Blogs_Cards/Blogs_Cards";
import Blogs_Banner from "@/_components/Blog/Blogs_Component/Blogs_Banner";

const page = () => {
    return (
        <div className="poppins py-20">
            <Blogs_Banner />
            <Blogs_Cards />
        </div>
    );
};

export default page;