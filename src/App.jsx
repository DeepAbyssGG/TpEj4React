import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import FormularioTarea from "./components/FormularioTarea";
import "./App.css"

function App() {
  return (
 <Container className="my-5 bg">
  <h1 className="text-center">Bienvenido</h1>
  <h3 className="text-center">Ingrese sus tareas </h3>
  <hr />
  <FormularioTarea/>
 </Container>
  );
}

export default App;
