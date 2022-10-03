import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const ItemsTarea = (props) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between m-1">
        {props.nombreTarea}
        <Button variant="danger" onClick={()=>props.borrarTarea(props.nombreTarea)}>X</Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemsTarea;