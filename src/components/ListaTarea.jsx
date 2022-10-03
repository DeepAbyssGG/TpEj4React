import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ItemsTarea from "./ItemsTarea";

const ListaTarea = (props) => {
  return (
    <div>
      <ListGroup>
        {props.arregloTarea.map((tarea, index) => (
          <ItemsTarea key={index} nombreTarea={tarea} borrarTarea={props.borrarTarea}/>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListaTarea;