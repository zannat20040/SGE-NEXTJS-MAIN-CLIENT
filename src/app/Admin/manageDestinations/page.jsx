"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

export default function page() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all blogs data when the component is mounted
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/destination/getAllDestinations`
        );
        setDestinations(response.data.data);
      } catch (error) {
        console.error("Error fetching destination:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleEdit = (id) => {
    console.log("Edit destination with ID:", id);
  };

  const handleDelete = (id) => {
    swal({
      title: "Are you sure you want to delete this destination?",
      text: "Once deleted, you will not be able to recover this destinations details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const response = await axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/destination/deleteDestination/${id}`
          );

          if (response.status === 200) {
            swal("Your destination has been deleted successfully!", {
              icon: "success",
            });
            setDestinations((prevBlogs) =>
              prevBlogs.filter((destination) => destination._id !== id)
            );
          } else {
            swal("Failed to delete the destination.", {
              icon: "error",
            });
          }
        } catch (error) {
          console.error("Error deleting destination:", error.message);
          swal("An error occurred while deleting the destination.", {
            icon: "error",
          });
        }
      } else {
        swal("Your destination's details is still safe!");
      }
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(destinations);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      {destinations &&
        destinations.length > 0 &&
        destinations?.map((destination) => (
          <div
            key={destination._id}
            className="flex justify-between !max-h-fit rounded-md overflow-hidden shadow-lg bg-white"
          >
            <div className="w-2/5 h-[100px]">
              <Image
                width={100}
                height={100}
                className=" w-full "
                src={destination?.destinationFlag}
                alt="Description of the image"
              />
            </div>
            <div className="flex flex-col w-full px-3 py-3">
              <div className="">
                <div className="font-bold  ">
                  {destination?.destinationName}
                </div>
                <p className="text-gray-700 text-xs">
                  {destination?.destinationTitle}
                </p>
              </div>
              <div className=" flex justify-end gap-2 mt-4">
                <Link href={`/admin/editDestination/${destination?.destinationName}`}>
                  <button
                    className="bg-blue-900 text-white py-1 px-3 rounded hover:bg-blue-700 duration-300"
                  >
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(destination?._id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
