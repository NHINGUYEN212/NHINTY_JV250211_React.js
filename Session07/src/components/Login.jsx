import React from 'react';

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gray-100 px-4">
            <section className="flex w-full max-w-5xl bg-white shadow-xl rounded-xl overflow-hidden">

                <figure className="w-1/2 hidden md:block ">
                    <img
                        src="../../public/img.jpg"
                        alt="Login Background"
                        className="w-full h-full object-cover block"
                    />
                </figure>

                <section className="w-full md:w-1/2 flex items-center justify-center p-10">
                    <div className="w-full max-w-md">
                        <header className="mb-6 text-center">
                            <h1 className="text-3xl font-bold">Login</h1>
                        </header>

                        <form className="space-y-5">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="password"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <div className="flex justify-end text-sm">
                                <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                            >
                                Login
                            </button>

                            <div className="flex items-center gap-2 mt-8">
                                <hr className="flex-grow border-gray-300" />
                                <span className="text-gray-400 text-sm">OR</span>
                                <hr className="flex-grow border-gray-300" />
                            </div>

                            <button
                                type="button"
                                className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-100 transition"
                            >
                                Register now
                            </button>
                        </form>
                    </div>
                </section>
            </section>
        </div>
    );
}
