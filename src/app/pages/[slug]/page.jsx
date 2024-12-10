"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Blog_BlogInbox from "@/_components/Blog/Blog_BlogInbox/Blog_BlogInbox";
import BlogSingle from "@/_components/Blog/Blogs_Component/BlogSingle";
import BlogSingle_Banner from "@/_components/Blog/BlogSingle_Banner/BlogSingle_Banner";
import Latest_Blogs from "@/_components/Blog/Latest_Blogs";

const Page = ({ params }) => {
  // Use React.use() to unwrap the params object
  const { slug } = params;  // No need to use `use` here

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/blog/getBlogBySlug/${slug}`
        );
        const fetchedBlog = response.data.blog;
        setBlog(fetchedBlog);
      } catch (err) {
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]); // The useEffect hook should depend on `slug`.

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="font-poppins pb-32">
      {/* Render blog components */}
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <BlogSingle_Banner blog={blog} />
      )}
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <BlogSingle blog={blog} />
      )}
      <Blog_BlogInbox />
      <Latest_Blogs />
    </div>
  );
};

export default Page;
