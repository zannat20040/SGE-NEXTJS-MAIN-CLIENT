import axios from "axios";
import Blog_BlogInbox from "../Blog_BlogInbox/Blog_BlogInbox";
import BlogSingle from "../Blogs_Component/BlogSingle";
import BlogSingle_Banner from "../BlogSingle_Banner/BlogSingle_Banner";
import Latest_Blogs from "../Latest_Blogs";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Single_Blog = ({id}) => {
  console.log(id);
  // const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // If no ID is present, return early

    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/blog/getBlogById/${id}`
        );
        setBlog(response.data.blog);
      } catch (err) {
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="font-poppins">
      <Head>
        <title>{blog?.pageTitle || "Blog"} - My Blog Site</title>{" "}
      </Head>
      <BlogSingle_Banner />
      <BlogSingle blog={blog} />
      {/* <SingleBlog /> */}
      <Blog_BlogInbox />
      <Latest_Blogs />
    </div>
  );
};

export default Single_Blog;
