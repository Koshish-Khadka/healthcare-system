import { redirect } from "next/navigation";
import Herosection from "./components/Home/herosection/Herosection";
import Navbar from "./components/Home/navbar/Navbar";
import Portals from "./components/Home/PortalsCard/Portals";

export default function Home() {
  const user = "kohish";
  const role = "patient";
  if (user && role) {
    redirect(`/${role}`);
  }
  return (
    <div>
      <Navbar />
      <Herosection />
      <Portals />
    </div>
  );
}
