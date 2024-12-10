"use client";

import { use, useEffect, useState } from "react";
import axios from "axios";
import Blog_BlogInbox from "@/_components/Blog/Blog_BlogInbox/Blog_BlogInbox";
import BlogSingle from "@/_components/Blog/Blogs_Component/BlogSingle";
import BlogSingle_Banner from "@/_components/Blog/BlogSingle_Banner/BlogSingle_Banner";
import Latest_Blogs from "@/_components/Blog/Latest_Blogs";

const Page = ({ params }) => {
  const resolvedParams = use(params); // Unwrap the Promise
  const { id } = resolvedParams;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

  console.log(blog);

  return (
    <div className="font-poppins">
      {/* <Head>
        <title>{blog?.pageTitle || "Blog"} - My Blog Site</title>
      </Head> */}
      <BlogSingle_Banner blog={blog} />
      <BlogSingle blog={blog} />
      <Blog_BlogInbox />
      <Latest_Blogs />
    </div>
  );
};

export default Page;
