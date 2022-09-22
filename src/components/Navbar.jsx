import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar className=" p-3 text-dark">
       
          <Link to="/home" className="text-white  text-decoration-none">
            🏠Home
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            📓 Contact
          </Link>
          <Container className="justify-content-end">
            <Navbar.Brand className="logo">Happy Cake 🧁</Navbar.Brand>
          </Container>
     
      </Navbar>
    </>
  );
}
