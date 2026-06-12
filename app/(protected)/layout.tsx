import React from "react";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import Dashnav from "../components/Dashboard/Sidebar/Dashnav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex bg-gray-200">
      {/* sidebar */}
      <aside className="w-full max-w-64 ">
        <Sidebar />
      </aside>
      <div className="flex-1 flex flex-col">
        <Dashnav />
        <div className="h-full w-full p-2 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
