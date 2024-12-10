"use client";
import { useEffect, useState } from "react";
import Blog_BlogInbox from "@/_components/Blog/Blog_BlogInbox/Blog_BlogInbox";
import BlogSingle from "@/_components/Blog/Blogs_Component/BlogSingle";
import BlogSingle_Banner from "@/_components/Blog/BlogSingle_Banner/BlogSingle_Banner";
import Latest_Blogs from "@/_components/Blog/Latest_Blogs";
import Single_blog from "@/_components/Blog/Single_Blog/Single_Blog";

const Page = ({ params }) => {
  console.log(params)
  const [id, setId] = useState(null);

  useEffect(() => {
    // Unwrap the promise
    async function fetchParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }

    fetchParams();
  }, [params]);

  if (!id) {
    // Optionally render a loading state
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Single_blog id={id} />
      <Blog_BlogInbox />
    </div>
  );
};

export default Page;
