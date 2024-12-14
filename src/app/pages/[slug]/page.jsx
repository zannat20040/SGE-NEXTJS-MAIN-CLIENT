import React from "react";
import BlogPageClient from "./BlogPageClient";
import axios from "axios";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/blog/getBlogBySlug/${slug}`
  );
  const post = response.data.blog;

  return {
    title: `${post.title} - My Blog`,
    description: post.description,
  };
}

const Page = ({ params }) => {
  return <BlogPageClient slug={params.slug} />;
};

export default Page;
