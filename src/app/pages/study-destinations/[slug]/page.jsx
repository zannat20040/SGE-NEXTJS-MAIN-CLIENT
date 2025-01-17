import React from "react";
import axios from "axios";
import DestinationDetails from "./DestinationDetails";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/destination/getDestinationBySlug/${slug}`
  );
  const data = response.data.destination;

  return {
    title: `${data.pageTitle} - My Blog`,
    description: data.meta,
  };
}

const Page = ({ params }) => {
  return <DestinationDetails slug={params.slug} />;
};

export default Page;
