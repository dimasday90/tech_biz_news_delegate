import { Navbar, Nav, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import ReactLoading from "react-loading";

export default function Appbar() {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const btnStyle = {
    marginRight: 10
  };
  const handleClick = async (event, link) => {
    await event.preventDefault();
    await setLoading(true);
    await router.push(link);
    await setLoading(false);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      className="justify-content-between"
      fixed="top"
      style={{ minHeight: 77 }}
    >
      <Navbar.Brand>
        {loading ? (
          <ReactLoading type="cubes" color="white" height={50} width={50} />
        ) : (
          "Tech Biz News"
        )}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Button
              variant={router.pathname === "/" ? "light" : "outline-light"}
              style={btnStyle}
              onClick={event => handleClick(event, "/")}
            >
              Home
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button
              variant={router.pathname === "/tech" ? "light" : "outline-light"}
              style={btnStyle}
              onClick={event => handleClick(event, "/tech")}
            >
              Technology
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button
              variant={
                router.pathname === "/business" ? "light" : "outline-light"
              }
              style={btnStyle}
              onClick={event => handleClick(event, "/business")}
            >
              Business
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
