import { Button } from "@/components/ui/button";
import Link from "next/link";

const Herosection = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <div>
        <h2 className="text-5xl font-bold">
          Welcome to
          <br />
          <span className="text-2xl font-medium text-blue-700">
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
        <Link href={"/sign-up"}>
          <Button variant={"default"} className="px-3 py-5">
            New Patient{" "}
          </Button>
        </Link>
        <Link href={"/sign-in"}>
          <Button variant={"link"} className="px-3 py-5 border border-">
            Login to account
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Herosection;
