import React from "react";

export default function Login() {
    return (
        <div>
            <section className="min-h-screen flex items-center justify-center bg-gray-50">
  <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
    <h1 className="text-2xl font-bold text-center mb-6">Login account</h1>
    <form className="space-y-5">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-700 text-left"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="name@company.com"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-700 text-left"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Login an account
      </button>

      <p className="text-sm text-center text-gray-500 mt-4">
        Already have an account?{" "}
        <a href="#" className="text-blue-600 font-medium hover:underline">
          Register here
        </a>
      </p>
    </form>
  </div>
</section>

        </div>
    );
}
