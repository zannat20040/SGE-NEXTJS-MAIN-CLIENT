"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../../firebase.config";
import { Slide, toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Check if the form fields are filled
  const isFormValid = email && password;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) return; // Don't proceed if form is not valid

    setLoading(true); // Set loading state to true
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in as Admin successfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Slide,
        style: { zIndex: 999999999 },
      });
      router.push("/admin/editBlogs"); // Navigate to the edit blog page after success
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Slide,
        style: { zIndex: 999999999 },
      });
      setError(error.message); // Set the error message
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-20">
      <h1 className="capitalize text-center py-5 font-semibold text-xl">
        Login Admin Panel
      </h1>
      <form className="card-body p-6 pt-0" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn bg-blue-900 text-white"
            disabled={loading || !isFormValid} // Disable if loading or form is incomplete
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}
