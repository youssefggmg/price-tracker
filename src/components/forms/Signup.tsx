"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { adduser } from '@/server-actions/action';
import { redirect } from 'next/navigation';

interface FormData {
    name: string;
    email: string;
    password: string;
    cpassword: string;
}

const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormData>();

    const [message, setMessage] = useState<string | null>(null);

    const onSubmit = async (data: FormData) => {
        const response = await adduser(data);
        if (!response.success) {
            setMessage(response.message);
        } else {
            setMessage(response.message);
            // Redirect or perform another action
            redirect("/Home")
        }
    };

    const password = watch('password');

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
                            <label className="text-gray-800 text-sm mb-2 block">Name</label>
                            <input
                                {...register('name', {
                                    required: 'Name is required',
                                    minLength: {
                                        value: 2,
                                        message: 'Name must be at least 2 characters long'
                                    }
                                })}
                                type="text"
                                name="name"
                                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                placeholder="Enter your name"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>
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
                                type="text"
                                name="email"
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
                                name="password"
                                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                placeholder="Enter password"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                            <input
                                {...register('cpassword', {
                                    required: 'Confirm Password is required',
                                    validate: (value) => value === password || 'Passwords do not match'
                                })}
                                type="password"
                                name="cpassword"
                                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                placeholder="Enter confirm password"
                            />
                            {errors.cpassword && <p className="text-red-500 text-sm">{errors.cpassword.message}</p>}
                        </div>
                        <div className="!mt-12">
                            <button
                                type="submit"
                                className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                            >
                                Create an account
                            </button>
                        </div>
                        {message && (
                            <p className={`text-sm mt-4 ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                                {message}
                            </p>
                        )}
                        <p className="text-gray-800 text-sm mt-6 text-center">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="text-blue-600 font-semibold hover:underline ml-1"
                            >
                                Login here
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
