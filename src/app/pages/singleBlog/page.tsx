import Blog_BlogInbox from "@/_components/Blog/Blog_BlogInbox/Blog_BlogInbox";
import BlogSingle from "@/_components/Blog/Blogs_Component/BlogSingle";
import BlogSingle_Banner from "@/_components/Blog/BlogSingle_Banner/BlogSingle_Banner";
import Latest_Blogs from "@/_components/Blog/Latest_Blogs";

const page = () => {
    return (
        <div>
            <BlogSingle_Banner />
            <BlogSingle />
            <Blog_BlogInbox />
            <Latest_Blogs />
        </div>
    );
};

export default page;