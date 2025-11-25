import React from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Applayout from "./applayout/Applayout";
import Dashboard from "./pages/SuperAdmin/Dashboard";
import ClubDashboard from "./pages/clubadmin/ClubDashboard"; // Create this page for club admin
import LoginPage from "./pages/Login";

export default function Router() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<LoginPage />} />

      {/* SuperAdmin Protected + Layout */}
      <Route
        path="/app/*"
        element={
          <ProtectedRoute>
            <Applayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        {/* Add other superadmin routes here */}
      </Route>

      {/* ClubAdmin Protected + Layout */}
      <Route
        path="/club/*"
        element={
          <ProtectedRoute>
            <Applayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<ClubDashboard />} />
        {/* Add other clubadmin routes here */}
      </Route>
    </Routes>
  );
}
