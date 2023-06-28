import { IconProps } from "phosphor-react";
import { ComponentType } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarLinkProps {
  path: string;
  title: string;
  icon: ComponentType<IconProps>;
  isMobile?: boolean;
}

export const SidebarLink = ({
  icon: Icon,
  title,
  path,
  isMobile = false,
}: SidebarLinkProps) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={path}
      className={`flex ${
        isMobile ? "flex-col" : "flex-row"
      } items-center gap-2 ${
        pathname === path && "text-violet-500"
      } hover:text-violet-700 transition-colors select-none`}
    >
      <Icon size={isMobile ? 24 : 20} />
      {/* {!isMobile && <span>{title}</span>} */}
      <span className="text-center">{title}</span>
    </Link>
  );
};
