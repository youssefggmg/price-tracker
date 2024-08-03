/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { logUser } from '@/server-actions/action';
import { redirect } from 'next/navigation';

interface FormData {
    email: string;
    password: string;
}

const Logein = () => {
    // Initialize react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();
    const [message, setMessage] = useState<string | null>(null);

    // Handle form submission
    const onSubmit = async (data: FormData) => {
        const response = await logUser(data);
        if (response.success) {
            setMessage("Login successful!");
            // Optionally redirect or perform other actions here
            redirect("/Home"); // Redirect to a home or dashboard page
        } else {
            setMessage(response.message || "An error occurred");
        }
    };

    return (
        <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
            <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
                <div className="text-center mb-12">
                    <a href="javascript:void(0)">
                        <img
                            src="logo-no-background.png"
                            alt="logo"
                            className="w-40 inline-block"
                        />
                    </a>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-6">
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Email</label>
                            <input
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Invalid email format'
                                    }
                                })}
                                name='email'
                                type="text"
                                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                placeholder="Enter email"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Password</label>
                            <input
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters long'
                                    }
                                })}
                                type="password"
                                name='password'
                                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                placeholder="Enter password"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                        <div className="!mt-12">
                            <button
                                type="submit"
                                className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                            >
                                Login
                            </button>
                        </div>
                        {message && (
                            <p className={`text-sm mt-4 ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
                                {message}
                            </p>
                        )}
                        <p className="text-gray-800 text-sm mt-6 text-center">
                            You don't have an account?{" "}
                            <Link
                                href="/signup"
                                className="text-blue-600 font-semibold hover:underline ml-1"
                            >
                                Signup here
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Logein;
