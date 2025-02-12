import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  path: string;
  title: string;
}

function NavItem({ path, title }: NavItemProps) {
  const location = useLocation();

  return (
    <li className="nav-item mx-3">
      <Link
        className={`nav-link ${location.pathname === path ? "active" : ""}`}
        to={path}
      >
        {title}
      </Link>
    </li>
  );
}

export default NavItem;
