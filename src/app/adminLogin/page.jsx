import React from "react";

export default function page() {
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-20 ">
      <h1 className="capitalize text-center  py-5 font-semibold text-xl">
        Login admin panel
      </h1>
      <form className="card-body p-6 pt-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input  input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-900 text-white ">Login</button>
        </div>
      </form>
    </div>
  );
}
