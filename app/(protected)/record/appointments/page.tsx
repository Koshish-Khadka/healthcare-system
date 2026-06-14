import Appointment from "@/app/components/Dashboard/appointment/Appointment";
import AppointmentTable from "@/app/components/Dashboard/appointment/AppointmentTable";

const Appointments = () => {


  return (
    <div className="bg-white rounded-md p-4 mt-4">
      <Appointment />
      <AppointmentTable />
    </div>
  );
};

export default Appointments;
