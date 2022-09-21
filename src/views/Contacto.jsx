import { Container } from "react-bootstrap";

export default () => {
  return (
 <div className="contact">
    <Container className="pt-5">
      <h1 className="mb-4">Cuéntanos, ¿en qué te podemos ayudar ?</h1>
      <h6>Correo:</h6>
      <input className="input-correo" type="email" placeholder="name@exameple.com" />
      <h6>Descripción:</h6>
      <textarea className="description"></textarea>
       </Container>
       <button>Enviar</button>
     </div>
  );
};
