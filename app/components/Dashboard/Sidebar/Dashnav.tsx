import { Bell, User } from "lucide-react";


const Dashnav = () => {
  return (
    <div className="flex justify-between items-center  px-4 py-3 rounded-md bg-white">
      <h2>Patient name</h2>
      <div className="flex gap-x-4">
        <Bell />
        <User />
      </div>
    </div>
  );
};

export default Dashnav;
