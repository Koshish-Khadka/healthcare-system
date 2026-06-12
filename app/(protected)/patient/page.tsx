import AppointmentTable from "@/app/components/Dashboard/appointment/AppointmentTable";
import { AppointmentChart } from "@/app/components/Dashboard/charts/AppointmentChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Briefcase,
  BriefcaseBusiness,
  BriefcaseMedical,
  LucideIcon,
} from "lucide-react";

const CardIcon = ({ icon: Icon }: { icon: LucideIcon }) => {
  return <Icon />;
};

const PatientDashboard = () => {
  const cardItems = [
    {
      id: 1,
      title: "Appointments",
      desc: "Total appointments",
      number: 11,
      className: "bg-blue-600/15",
      icon: Briefcase,
    },
    {
      id: 2,
      title: "Cancelled",
      desc: "Cancelled appointments",
      number: 12,
      icon: Briefcase,
      className: "bg-rose-600/15",
    },
    {
      id: 3,
      title: "Pending",
      desc: "Pening appointments",
      number: 115,
      className: "bg-yellow-600/15",
      icon: BriefcaseBusiness,
    },
    {
      id: 4,
      title: "Completed",
      desc: "Completed appointments",
      number: 66,
      className: "bg-emerald-600/15",
      icon: BriefcaseMedical,
    },
  ];

  const data = [
    {
      name: "Jan",
      appointment: 18,
      completed: 12,
    },
    {
      name: "Feb",
      appointment: 25,
      completed: 20,
    },
    {
      name: "Mar",
      appointment: 32,
      completed: 28,
    },
    {
      name: "Apr",
      appointment: 28,
      completed: 22,
    },
    {
      name: "May",
      appointment: 40,
      completed: 35,
    },
    {
      name: "Jun",
      appointment: 36,
      completed: 30,
    },
  ];
  return (
    <div className="py-4 flex flex-col rounded-xl md:flex-row gap-6">
      {/* left side */}
      <div className="w-full md:w-[69%]">
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between ">
            <h1 className="text-xl font-bold">Hello, Koshish </h1>
            <Button variant={"outline"}>View Profile</Button>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {cardItems.map((items) => (
              <Card key={items.id} className="p-4 rounded-md">
                <CardHeader>
                  <h3>{items.title}</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 ">
                    <CardIcon icon={items.icon} />
                    <h2 className="text-2xl 2xl:text-3xl font-semibold">
                      {items.number}
                    </h2>
                  </div>
                  <p className="text-[11px] text-center mt-5">{items.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* charts */}
        <div className="bg-white rounded-xl p-4 mt-4">
          <AppointmentChart data={data} />
        </div>
        {/* recent appointements */}

        <div className="bg-white rounded-xl p-4 mt-4">
          <h1 className="text-md font-medium">Recent Appointments</h1>
          <AppointmentTable />
        </div>
      </div>
      {/* right side */}
      <div className="w-full md:w-[30%]">
        <div className="p-4 bg-white rounded-xl">
          <div className="flex justify-between items-center">
            <p>Summary</p>
            <Button variant={"outline"}> See Detail</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
