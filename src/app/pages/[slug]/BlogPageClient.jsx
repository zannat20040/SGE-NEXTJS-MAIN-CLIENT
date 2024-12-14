"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Blog_BlogInbox from "@/_components/Blog/Blog_BlogInbox/Blog_BlogInbox";
import BlogSingle from "@/_components/Blog/Blogs_Component/BlogSingle";
import BlogSingle_Banner from "@/_components/Blog/BlogSingle_Banner/BlogSingle_Banner";
import Latest_Blogs from "@/_components/Blog/Latest_Blogs";

const BlogPageClient = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/blog/getBlogBySlug/${slug}`
        );
        setBlog(response.data.blog);
      } catch (err) {
        setError("Failed to load blog", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="font-poppins pb-32">
      <BlogSingle_Banner blog={blog} />
      <BlogSingle blog={blog} />
      <Blog_BlogInbox />
      <Latest_Blogs />
    </div>
  );
};

export default BlogPageClient;
