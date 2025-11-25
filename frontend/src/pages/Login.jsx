import React, { useState } from "react";
import banner from "../assets/banner.webp";
import { useAuth } from "../context/Authprovider";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Call login and wait for result
    const result = await login(email, password);

    setIsLoading(false);

    if (result.success) {
      navigate("/app");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }}
      />

      <div className="relative z-10 w-full max-w-md px-6 animate-fadeIn">
        <div
          className="
            backdrop-blur-xl 
            bg-black/20 
            border border-yellow-400/40 
            rounded-lg 
            p-8 
            shadow-2xl 
            shadow-yellow-400/30 
            transform 
            transition-all 
            duration-500 
            hover:shadow-yellow-400/50
          "
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-yellow-400 mb-2 animate-slideDown">
              Welcome Back
            </h1>
            <p
              className="text-yellow-400/70 animate-slideDown"
              style={{ animationDelay: "0.1s" }}
            >
              Sign in to your account
            </p>
          </div>

          {/* Error Message (no style changes) */}
          {error && (
            <p className="text-red-400 text-center mb-4 font-semibold">
              {error}
            </p>
          )}

          {/* Form */}
          <div className="space-y-6">
            {/* Email Field */}
            <div className="animate-slideUp" style={{ animationDelay: "0.2s" }}>
              <label
                htmlFor="email"
                className="block text-yellow-400 text-sm font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full px-4 py-3 
                  bg-black/30 
                  border-2 border-yellow-400/50 
                  rounded-lg 
                  text-yellow-400 
                  placeholder-yellow-400/30
                  focus:outline-none 
                  focus:border-yellow-400 
                  focus:shadow-lg 
                  focus:shadow-yellow-400/20 
                  transition-all 
                  duration-300
                "
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div className="animate-slideUp" style={{ animationDelay: "0.3s" }}>
              <label
                htmlFor="password"
                className="block text-yellow-400 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full px-4 py-3 
                  bg-black/30 
                  border-2 border-yellow-400/50 
                  rounded-lg 
                  text-yellow-400 
                  placeholder-yellow-400/30
                  focus:outline-none 
                  focus:border-yellow-400 
                  focus:shadow-lg 
                  focus:shadow-yellow-400/20 
                  transition-all 
                  duration-300
                "
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me */}
            <div
              className="flex items-center justify-between animate-slideUp"
              style={{ animationDelay: "0.4s" }}
            >
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="
                    w-4 h-4 
                    border-2 border-yellow-400 
                    bg-black/40 
                    rounded 
                    checked:bg-yellow-400 
                    focus:ring-2 
                    focus:ring-yellow-400/50 
                    transition-all 
                    duration-300
                  "
                />
                <span className="ml-2 text-sm text-yellow-400/70">
                  Remember me
                </span>
              </label>

              <button
                type="button"
                className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="
                w-full py-3 
                bg-yellow-400 
                text-black 
                font-bold 
                rounded-lg 
                hover:bg-yellow-300 
                focus:outline-none 
                focus:ring-4 
                focus:ring-yellow-400/50 
                transform 
                hover:scale-105 
                active:scale-95 
                transition-all 
                duration-300 
                shadow-lg 
                shadow-yellow-400/30 
                animate-slideUp 
                disabled:opacity-50 
                disabled:cursor-not-allowed
              "
              style={{ animationDelay: "0.5s" }}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </div>

          {/* Signup Link */}
          <div
            className="mt-6 text-center animate-slideUp"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-yellow-400/70 text-sm">
              Don't have an account?{" "}
              <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-300">
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
