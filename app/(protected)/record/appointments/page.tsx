import AppointmentTable from "@/app/components/Dashboard/appointment/AppointmentTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Book } from "lucide-react";

const Appointments = () => {
  return (
    <div className="bg-white rounded-md p-4 mt-4">
      <div className="flex justify-between">
        <h3 className="font-semibold mb-4">
          0 <span className="font-light">Appointement</span>
        </h3>
        <div className="flex gap-4">
          <Input placeholder="Search" />
          <Button
            variant={"outline"}
            className="bg-blue-800 text-white rounded-md"
          >
            <Book />
            Book Appointment
          </Button>
        </div>
        {/* appointment table */}
      </div>
      <AppointmentTable />
    </div>
  );
};

export default Appointments;
