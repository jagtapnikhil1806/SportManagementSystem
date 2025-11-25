import React, { useState } from "react";
import { useAuth } from "../context/Authprovider";

export default function Header() {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between  h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">M</span>
            </div>
            <span className="font-semibold text-white text-lg tracking-tight">
              MxS <span className="text-emerald-400 font-light">Finance</span>
            </span>
          </div>

          {/* Profile section */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              aria-label="User menu"
            >
              <div className="flex flex-col items-end text-right">
                <span className="text-sm font-medium text-white leading-tight">
                  {user?.name || "User"}
                </span>
                <span className="text-xs text-slate-400 capitalize">
                  {user?.role || "Member"}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center font-semibold text-slate-900 text-sm shadow-lg shadow-emerald-500/20">
                {user?.name?.charAt(0) || "U"}
              </div>
              <svg
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-slate-900 rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden z-50 animate-fadeIn">
                <div className="px-4 py-4 border-b border-slate-700/50">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center font-semibold text-slate-900 shadow-lg shadow-emerald-500/20">
                      {user?.name?.charAt(0) || "U"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm truncate">
                        {user?.name}
                      </p>
                      <p className="text-xs text-slate-400 truncate">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-xs font-medium text-emerald-400 uppercase tracking-wide">
                      {user?.role || "Member"}
                    </span>
                  </div>
                </div>

                <div className="py-2">
                  <button className="w-full text-left px-4 py-2.5 hover:bg-slate-800/50 transition-colors flex items-center space-x-3 text-slate-300 hover:text-white">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="text-sm font-medium">
                      Account Settings
                    </span>
                  </button>

                  <button className="w-full text-left px-4 py-2.5 hover:bg-slate-800/50 transition-colors flex items-center space-x-3 text-slate-300 hover:text-white">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="text-sm font-medium">Statements</span>
                  </button>
                </div>

                <div className="border-t border-slate-700/50 py-2">
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2.5 hover:bg-red-500/10 transition-colors flex items-center space-x-3 text-slate-300 hover:text-red-400 group"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out;
          }
        `}
      </style>
    </header>
  );
}
