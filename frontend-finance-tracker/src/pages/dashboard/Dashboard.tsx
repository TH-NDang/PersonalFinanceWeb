import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const location = useLocation();

   useEffect(() => {
     if (location.pathname === "/dashboard") {
       setActiveItem("Dashboard");
     }
   }, [location.pathname]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        isExpanded={isSidebarExpanded}
        setIsExpanded={setIsSidebarExpanded}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isSidebarExpanded={isSidebarExpanded} />
        <main
          className={`flex-1 overflow-y-auto p-6 transition-all duration-300 ${
            isSidebarExpanded ? "ml-64" : "ml-20"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
