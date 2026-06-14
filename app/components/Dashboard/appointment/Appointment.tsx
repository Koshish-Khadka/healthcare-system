"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Book } from "lucide-react";
import AddAppointment from "@/app/components/Dashboard/appointment/AddAppointment";
import { useState } from "react";

const Appointment = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex justify-between">
      <h3 className="font-semibold mb-4">
        0 <span className="font-light">Appointement</span>
      </h3>
      <div className="flex gap-4">
        <Input placeholder="Search" />
        <Button
          variant={"outline"}
          className="bg-blue-800 text-white rounded-md"
          onClick={() => setOpen(true)}
        >
          <Book />
          Book Appointment
        </Button>
        <AddAppointment open={open} setOpen={setOpen} />
      </div>
      {/* appointment table */}
    </div>
  );
};

export default Appointment;
