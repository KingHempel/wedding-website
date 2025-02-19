import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  path: string;
  title: string;
  onClick?: () => void;
}

function NavItem({ path, title, onClick }: NavItemProps) {
  const location = useLocation();

  return (
    <li className="nav-item mx-3">
      <Link
        className={`nav-link ${location.pathname === path ? "active" : ""}`}
        to={path}
        onClick={onClick}
      >
        {title}
      </Link>
    </li>
  );
}

export default NavItem;
