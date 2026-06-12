import Herosection from "./components/Home/herosection/Herosection";
import Navbar from "./components/Home/navbar/Navbar";
import Portals from "./components/Home/PortalsCard/Portals";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Portals />
    </div>
  );
}
