import React, { useEffect, useState,  } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
  const tareaLocalStorage = JSON.parse(localStorage.getItem("arregloTareaKey"))||[];
  const [tarea, setTarea] = useState("");
  const [arregloTarea, setArregloTarea] = useState(tareaLocalStorage);
  const hundleSubmit = (e) => {
    e.preventDefault();
    setArregloTarea([...arregloTarea, tarea]);
    setTarea("");
  };

  useEffect(()=>{
    localStorage.setItem("arregloTareaKey",JSON.stringify(arregloTarea))
  },[arregloTarea]);
const borrarTarea = (nombre)=>{
let arregloModificado= arregloTarea.filter((item)=>(item !== nombre));
setArregloTarea(arregloModificado);
}
  return (
    <div>
      <Form onSubmit={hundleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Form.Text className="text-muted"></Form.Text>
          <Button variant="primary" type="submit" className="m-2">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea arregloTarea={arregloTarea} borrarTarea={borrarTarea} />
    </div>
  );
};

export default FormularioTarea;