import { signOut } from "firebase/auth";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import auth from "../../../firebase.config";

export default function AdminSidebar() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('btn pressed');
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };

  return (
    <div className="drawer lg:drawer-open sticky left-0 top-0">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary bg-blue-900 text-white drawer-button lg:hidden"
        >
          <FaBars />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-blue-900 text-white min-h-full w-60 p-4">
          {/* Sidebar content here */}
          <Link
            href={"/admin/createBlogs"}
            className="py-2 px-6 hover:bg-gray-50 hover:text-blue-900 rounded duration-300"
          >
            Add New Blogs
          </Link>
          <Link
            href={"/admin/createEvent"}
            className="py-2 px-6 hover:bg-gray-50 hover:text-blue-900 rounded duration-300"
          >
            Add New Event
          </Link>
          <Link
            href={"/admin/createDestination"}
            className="py-2 px-6 hover:bg-gray-50 hover:text-blue-900 rounded duration-300"
          >
            Add New Destination
          </Link>
          <Link
            href={"/admin/editBlogs"}
            className="py-2 px-6 hover:bg-gray-50 hover:text-blue-900 rounded duration-300"
          >
            Edit New blog
          </Link>
          <button
            onClick={handleLogout}  // Changed onSubmit to onClick
            className="rounded py-2 px-6 bg-blue-700"
          >
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
}
