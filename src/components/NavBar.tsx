import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavItem from "./NavItem";
import "./Style.css";

function NavBar() {
  const [currentPage, setCurrentPage] = useState<string>(
    window.location.pathname
  );
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const pages = [
    { path: "/", title: "Home" },
    { path: "/TheDay", title: "The Day" },
    { path: "/wedding-party", title: "Wedding Party" },
    { path: "/gallery", title: "Gallery" },
    { path: "/faqs", title: "FAQs" },
    { path: "/rsvp", title: "RSVP" },
  ];

  return (
    <Navbar
      expand="lg"
      className={`${isCollapsed ? "bg-transparent" : "bg-dark"}`}
      onToggle={(expanded: boolean) => setIsCollapsed(!expanded)}
      expanded={!isCollapsed}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="w-100"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-center">
            {pages.map((page) => (
              <NavItem
                key={page.path}
                path={page.path}
                title={page.title}
                isActive={currentPage === page.path}
                setCurrentPage={setCurrentPage}
              />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
