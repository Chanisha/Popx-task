import React, { useState } from "react";
import "./index.css";

const WelcomeScreen: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return (
      <div className="flex flex-col justify-start h-screen bg-white px-6 pt-12">
        <div className="mb-6 text-left">
          <h1 className="text-xl font-bold text-gray-900">Signin to your PopX account</h1>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="w-full space-y-4">
          <div>
            <label className="block text-sm font-semibold text-violet-600">Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full mt-1 px-3 py-2 border rounded-md text-sm text-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-violet-600">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full mt-1 px-3 py-2 border rounded-md text-sm text-gray-700 focus:outline-none"
            />
          </div>
          <button className="w-full py-3 rounded-md bg-gray-300 text-white font-bold" disabled>
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-end h-screen bg-white px-6 pb-12">
      <div className="mb-6 text-left">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to PopX</h1>
        <p className="text-xl text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <div className="w-full space-y-3">
        <button className="w-full py-3 rounded-md bg-violet-600 text-white font-bold">
          Create Account
        </button>
        <button
          onClick={() => setShowLogin(true)}
          className="w-full py-3 rounded-md bg-purple-200 text-black font-bold"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
