import SingleUniversity from "@/_components/shared/SingleUniversity/SingleUniversity";
import axios from "axios";

export async function generateMetadata({ params }) {
  const { destination, Name } = params;

  // Fetch data for metadata generation
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/destination/getDestinationBySlug/${destination}`
  );
  const data = response.data.destination;
  const decodedName = decodeURIComponent(Name);

  // Find the university details
  const universityDetails = data?.topUniversity.find(
    (item) => item.name.toLowerCase() === decodedName.toLowerCase()
  );

  console.log("20===>", universityDetails);
  // Return metadata using destructured values
  return {
    title: `${universityDetails?.title} - ${universityDetails?.subTitle}`,
    description: universityDetails?.desc,
  };
}

export default async function page({ params }) {
  const { destination, Name } = params;

  // Fetch data for the page
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/destination/getDestinationBySlug/${destination}`
  );
  const data = response.data.destination;
  const decodedName = decodeURIComponent(Name);

  // Find the university details
  const universityDetails = data?.topUniversity.find(
    (item) => item.name.toLowerCase() === decodedName.toLowerCase()
  );

  return (
    <div>
      <SingleUniversity universityDetails={universityDetails} />
    </div>
  );
}
