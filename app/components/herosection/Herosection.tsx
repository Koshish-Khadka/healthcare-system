import { Button } from "@/components/ui/button";
import React from "react";

const Herosection = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <div>
        <h2 className="text-5xl font-bold">
          Welcome to
          <br />
          <span className="text-2xl font-medium text-blue-900">
            Health Management System
          </span>
        </h2>
      </div>
      <div className="py-6">
        <p className="text-lg font-light max-w-2xl">
          Manage your hospital operations, patient records, and more with our
          powerful hospital management system.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Button variant={"default"} className="px-3 py-5">New Patient </Button>
        <Button variant={"link"} className="px-3 py-5 border border-">Login to account</Button>
      </div>
    </div>
  );
};

export default Herosection;
