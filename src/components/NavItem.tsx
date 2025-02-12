interface NavItemProps {
  path: string;
  title: string;
  isActive: boolean;
  setCurrentPage: (path: string) => void;
}

function NavItem({ path, title, isActive, setCurrentPage }: NavItemProps) {
  const handleClick = () => {
    setCurrentPage(path);
  };

  return (
    <li className="nav-item mx-3">
      <a
        className={`nav-link ${isActive ? "active" : ""}`}
        href={path}
        onClick={handleClick}
      >
        {title}
      </a>
    </li>
  );
}

export default NavItem;
