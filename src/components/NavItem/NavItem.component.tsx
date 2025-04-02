import { cn } from "@/utils/cn";
import { Link, useLocation } from "react-router-dom";

interface INavItemProps {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const NavItem = ({ label, href, icon }: INavItemProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === href;
  return (
    <Link
      to={href}
      className={cn(
        "body-regular flex items-center gap-2 rounded-lg px-5 py-[10px] text-primaryBlack transition-all duration-300 hover:bg-lightGrey",
        isActive && "bg-lightGrey"
      )}
    >
      {icon}
      <span className="hidden md:block">{label}</span>
    </Link>
  );
};

export default NavItem;
