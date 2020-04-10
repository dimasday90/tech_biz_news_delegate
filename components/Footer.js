import { Navbar, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-center">
      <Navbar.Brand>
        Powered by{" "}
        <a href="https://newsapi.org" target="_blank">
          newsapi.org
        </a>
      </Navbar.Brand>
    </Navbar>
  );
}
