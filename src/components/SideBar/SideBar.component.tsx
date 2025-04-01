import dcycleLogo from "@/assets/images/dcycle.png";
import NavItem from "../NavItem/NavItem.component";
import { FolderPen, ChartNoAxesCombined } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const NAVIGATION_LINKS = [
  {
    label: "Name Info",
    href: "/",
    icon: <FolderPen />,
    key: "name-info",
  },
  {
    label: "Covid Info",
    href: "/covid",
    icon: <ChartNoAxesCombined />,
    key: "covid-info",
  },
];

const SideBar = () => {
  return (
    <div className="flex h-screen">
      <nav className="fixed left-0 flex h-full flex-col items-center gap-[40px] border-r border-lightGrey bg-white px-5 py-10 md:w-[240px]">
        <Link to="/">
          <img src={dcycleLogo} alt="dcycle logo" className="w-[150px]" />
        </Link>

        <div className="flex flex-col items-center gap-5">
          {NAVIGATION_LINKS.map(({ label, href, icon, key }) => {
            return <NavItem key={key} label={label} href={href} icon={icon} />;
          })}
        </div>
      </nav>
      <main className="flex-1 md:ml-[240px]">
        <Outlet />
      </main>
    </div>
  );
};

export default SideBar;
