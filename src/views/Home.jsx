import { Container } from "react-bootstrap";

export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span>
      </h1>
      <h4 className="caption"> El lugar de los pasteles felices</h4>
      <img className="cake" src="https://cdn-icons-png.flaticon.com/512/4525/4525698.png"/>
    </Container>
  );
};
