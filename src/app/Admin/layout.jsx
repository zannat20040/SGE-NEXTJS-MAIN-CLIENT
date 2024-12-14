"use client";
import { ToastContainer } from "react-toastify";
import AdminSidebar from "../../_components/Admin/AdminSidebar";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../../firebase.config";
import AdminLoginPage from "../adminLogin/page";

export default function AdminLayout({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);  // To handle loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);  // Set loading to false once auth state is resolved
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    // Show loading state (could be a spinner, or simply return null)
    return null;  // Or you could return a loading spinner if you prefer
  }

  return user ? (
    <div className="admin-content flex relative">
      <ToastContainer />
      <div className="right-10 bottom-10 fixed lg:static">
        <AdminSidebar />
      </div>
      <div className="w-full p-4">{children}</div>
    </div>
  ) : (
    <div>
      <ToastContainer />
      <AdminLoginPage />
    </div>
  );
}
