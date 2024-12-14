import Link from "next/link";
import React from "react";

export default function AdminSidebar() {

  return (
    <div className="drawer lg:drawer-open sticky left-0 top-0 ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-blue-900  text-white min-h-full w-60 p-4">
          {/* Sidebar content here */}
          <Link
            href={"/admin/createBlogs"}
            className="py-2 px-6 hover:bg-gray-50 hover:text-blue-900 rounded duration-300 "
          >
            Add New Blogs
          </Link>
          <Link
            href={"/admin/createEvent"}
            className="py-2 px-6 hover:bg-gray-50 hover:text-blue-900 rounded duration-300 "
          >
            Add New Event
          </Link>
          <Link
            href={"/admin/createDestination"}
            className="py-2 px-6 hover:bg-gray-50 hover:text-blue-900 rounded duration-300 "
          >
            Add New Destination
          </Link>
        </ul>
      </div>
    </div>
  );
}
