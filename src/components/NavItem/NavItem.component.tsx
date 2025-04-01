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
        "flex items-center gap-2 text-primaryBlack body-regular rounded-lg px-5 py-[10px] hover:bg-lightGrey transition-all duration-300",
        isActive && "bg-lightGrey"
      )}
    >
      {icon}
      {label}
    </Link>
  );
};

export default NavItem;
