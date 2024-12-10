"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Blog_BlogInbox from "@/_components/Blog/Blog_BlogInbox/Blog_BlogInbox";
import BlogSingle from "@/_components/Blog/Blogs_Component/BlogSingle";
import BlogSingle_Banner from "@/_components/Blog/BlogSingle_Banner/BlogSingle_Banner";
import Latest_Blogs from "@/_components/Blog/Latest_Blogs";
import Head from "next/head";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  // Destructure slug from params directly
  const { slug } = params; // Remove the duplicate destructuring
console.log('slug=========',slug)
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/blog/getBlogBySlug/${slug}`
        );
        const fetchedBlog = response.data.blog;
        setBlog(fetchedBlog);

        // Generate the expected slug from the blog title
        const expectedSlug = fetchedBlog.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-");

        // Redirect to the correct URL if the slug in the URL is incorrect
        if (slug !== expectedSlug) {
          router.replace(`/${expectedSlug}`);
        }
      } catch (err) {
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug, router]); // The useEffect hook should depend on `slug`.

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="font-poppins">
      {/* Set dynamic title and meta description */}
      <Head>
        <title>{blog?.title || "Loading Blog..."}</title>
        <meta name="description" content={blog?.description || "A great blog post"} />
      </Head>
      {/* Render blog components */}
      <BlogSingle_Banner blog={blog} />
      <BlogSingle blog={blog} />
      <Blog_BlogInbox />
      <Latest_Blogs />
    </div>
  );
};

export default Page;
