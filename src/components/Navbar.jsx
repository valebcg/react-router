import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";


export default function Navigation() {
  return (
    <>
      <nav class= " p-4 text-dark"  >
        <Container className="justify-content-start">
       
         <Link to="/home" className="text-white  text-decoration-none">
         🏠Home
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
          📓 Contact
          </Link>
        </Container>
      </nav>
    </>
  );
}
