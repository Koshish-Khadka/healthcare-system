import { BriefcaseMedical, Heart, Pill, UserRound, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portals = () => {
  const portals = [
    {
      id: 1,
      title: "Admin Portal",
      description:
        "Secure access for administrator to manage hospital resources.",
      btntext: "Admin Login",
      icon: <UserRound color="blue" />,
    },
    {
      id: 2,
      title: "Doctor Portal",
      description:
        "Secure access for doctors to manage patients, appointments, diagnosis stc.",
      btntext: "Doctor Login",
      icon: <Users color="red" />,
    },
    {
      id: 3,
      title: "Nurses Portal",
      description:
        "Secure access for nurses to manage patient care, schedules, and vital signs.",
      btntext: "Nurses Login",
      icon: <Users color="purple" />,
    },
    {
      id: 4,
      title: "Patient Portal",
      description:
        "Easy access for patients to view appointments, medical records, and more.",
      btntext: "Patient Login",
      icon: <Heart color="green" />,
    },
    {
      id: 5,
      title: "Laboratory Portal",
      description:
        "Secure access for nurses to manage patient care, laboratory tests.",
      btntext: "Lab Login",
      icon: <BriefcaseMedical color="yellow" />,
    },
    {
      id: 6,
      title: "Pharmacy Portal",
      description:
        "Secure access for nurses to manage patient prescriptions, inventory and dispensary.",
      btntext: "Pharma Login",
      icon: <Pill color="pink" />,
    },
  ];
  return (
    <div className="max-w-6xl m-auto px-4">
      <h2 className="text-3xl font-bold text-center">
        Dedicated Portals for Every User
      </h2>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portals.map((items) => (
          <Card
            key={items.id}
            className="text-center p-6 hover:shadow-2xl transition-all duration-300"
          >
            <CardHeader className="flex flex-col items-center gap-3">
              <div className="border p-3 rounded-full">{items.icon}</div>
              <CardTitle className="text-xl font-bold">{items.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {items.description}
              </p>
              <Button variant="outline" className="mt-5 px-4 py-5">
                {items.btntext}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portals;
