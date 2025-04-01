import dcycleLogo from "@/assets/images/dcycle.png"
import NavItem from "../NavItem/NavItem.component"
import { FolderPen, ChartNoAxesCombined } from "lucide-react"
import { Link, Outlet } from "react-router-dom"

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
]

const SideBar = () => {
  return (
    <div className="flex h-screen">
      <nav className="fixed left-0 md:w-[240px] h-full bg-white px-5 py-10 flex flex-col gap-[40px] items-center border-r border-lightGrey">
        <Link to="/">
          <img src={dcycleLogo} alt="dcycle logo" className="w-[150px]" />
        </Link>

        <div className="flex flex-col gap-5 items-center">
          {NAVIGATION_LINKS.map(({ label, href, icon, key }) => {
            return <NavItem key={key} label={label} href={href} icon={icon} />
          })}
        </div>
      </nav>
      <main className="flex-1 md:ml-[240px]">
        <Outlet />
      </main>
    </div>
  )
}

export default SideBar
