'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../../firebase.config'
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation'

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect or handle successful login
            Swal.fire({position: "top-end", icon: "success", title: "Signed in", showConfirmButton: false, timer: 1500});
            setEmail('')
            setPassword('')
            router.push('/')
        } catch   {
            Swal.fire({position: "top-end", icon: "error", title: 'There was an unexpected error.', showConfirmButton: false, timer: 1500});
        }
    };

    return (
        <div className="bg-gray-100 pt-10 pb-52 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                <div className="p-5 sm:p-10">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-5">
                        Log In
                    </h2>
                    {error && <p className="text-red-500">{error}</p>}
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded"
                            />
                        </div>

                        <div className="flex items-center mb-6">
                            <label
                                htmlFor="forgotPassword"
                                className="text-gray-600 text-sm pl-1"
                            >
                                Forgot Password?
                            </label>
                        </div>

                        <div className="mb-3">
                            <button type="submit" className="bg-[#081831] text-white p-3 rounded w-full">
                                Sign In
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 sm:flex-row gap-4">
                            <button className="bg-[#081831] text-white p-3 rounded w-full">
                                Sign In With Google
                            </button>
                            <Link href="/registration">
                                <button type="button" className="bg-gray-100 text-gray-700 p-3 rounded w-full">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
