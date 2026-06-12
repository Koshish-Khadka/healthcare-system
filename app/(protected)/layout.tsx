import React from "react";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import Dashnav from "../components/Dashboard/Sidebar/Dashnav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex bg-gray-200">
      {/* sidebar */}
      <aside className="w-[14%] md:w-[8%] lg:w-[16%]">
        <Sidebar />
      </aside>
      <div className="flex-1 flex flex-col mx-2 my-2">
        <Dashnav />
        <div className="h-full w-full p-2 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
