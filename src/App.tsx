import React, { useState } from "react";
import "./index.css";

const App: React.FC = () => {
  const [page, setPage] = useState<"welcome" | "login" | "account">("welcome");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  if (page === "welcome") {
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
            onClick={() => setPage("login")}
            className="w-full py-3 rounded-md bg-purple-200 text-black font-bold"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    );
  }

  if (page === "login") {
    return (
      <div className="flex flex-col justify-start h-screen bg-white px-6 pt-12">
        <div className="mb-6 text-left">
          <h1 className="text-xl font-bold text-gray-900">
            Signin to your PopX account
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="w-full space-y-6">
          {/* Email */}
          <div className="relative">
            <div className="absolute -top-2 left-3 bg-white px-1 text-xs sm:text-sm text-purple-600 font-medium">
              Email Address
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-purple-500 
                         focus:border-transparent text-gray-700 text-sm sm:text-base"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute -top-2 left-3 bg-white px-1 text-xs sm:text-sm text-purple-600 font-medium">
              Password
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-purple-500 
                         focus:border-transparent text-gray-700 text-sm sm:text-base"
              required
            />
          </div>

          <button
            type="button"
            onClick={() => isFormValid && setPage("account")}
            className={`w-full py-3 rounded-md font-bold transition-colors duration-300 ${
              isFormValid
                ? "bg-violet-600 text-white"
                : "bg-gray-300 text-white"
            }`}
            disabled={!isFormValid}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  if (page === "account") {
    return (
      <div className="flex flex-col h-screen bg-white px-6 pt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Account Settings
        </h2>

        <div className="flex items-start space-x-4 bg-white p-4 border rounded-lg shadow-sm">
          <div className="relative">
            <img src="/lady.png" alt="" className="w-14 h-14 object-cover" />
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-gray-900">Marry Doe</h3>
            <p className="text-sm text-gray-600">Marry@gmail.com</p>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
              nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default App;
