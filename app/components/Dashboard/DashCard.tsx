import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PropsType {
  id: number;
  title: string;
  desc: string;
  number: number;
  className?: string;
  icon: LucideIcon;
}

interface DataProps {
  data: PropsType;
}

const CardIcon = ({ icon: Icon }: { icon: LucideIcon }) => {
  return <Icon />;
};

const DashCard = ({ data }: DataProps) => {
  return (
    <Card className="p-4 rounded-md">
      <CardHeader>
        <h3>{data.title}</h3>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <CardIcon icon={data.icon} />
          <h2 className="text-2xl 2xl:text-3xl font-semibold">{data.number}</h2>
        </div>
        <p className="text-[11px] text-center mt-5">{data.desc}</p>
      </CardContent>
    </Card>
  );
};

export default DashCard;
