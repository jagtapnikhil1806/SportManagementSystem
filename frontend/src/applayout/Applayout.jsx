import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useAuth } from "../context/Authprovider";
import SuperAdminSidebar from "../components/SuperAdminSidebar";
import ClubAdminSidebar from "../components/ClubAdminSidebar";

const AppLayout = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  let SidebarComponent = null;
  let redirectPath = null;

  if (user.role === "superadmin") {
    SidebarComponent = SuperAdminSidebar;
    redirectPath = "/app";
  } else if (user.role === "clubadmin") {
    SidebarComponent = ClubAdminSidebar;
    redirectPath = "/club";
  } else {
    redirectPath = "/";
  }

  if (!["superadmin", "clubadmin"].includes(user.role)) {
    return <Navigate to={redirectPath} replace />;
  }

  const currentPath = location.pathname;
  if (user.role === "superadmin" && !currentPath.startsWith("/app")) {
    return <Navigate to="/app" replace />;
  }
  if (user.role === "clubadmin" && !currentPath.startsWith("/club")) {
    return <Navigate to="/club" replace />;
  }

  return (
    <div className="w-full h-screen overflow-hidden bg-gray-100">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      {/* Fixed Sidebar */}
      <div className="fixed top-[64px] left-0 w-64 h-[calc(100vh-64px)] bg-white z-40 overflow-y-auto overflow-x-hidden sidebar-hidden-scroll ">
        <SidebarComponent />
      </div>
      {/* Scrollable Content Area */}
      <main
        className="
          ml-60 
          mt-[64px]
          h-[calc(100vh-64px)]
          overflow-y-auto
          p-6   
          bg-white
        "
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
