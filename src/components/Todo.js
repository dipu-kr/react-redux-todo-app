import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { remove, update_data } from "../redux/actions/action";
import Alert from "react-bootstrap/Alert";

function Todo() {
  const { User_data } = useSelector((state) => state.todoreducers);

  const dispatch = useDispatch();
  //--------- show model state-----------
  const [showeye, setShoweye] = useState(false);
  //------------ Setvalue state-----------
  const [showeyeValue, setShoweyeValue] = useState("");
  //----------- Edit states--------------
  const [show, setShow] = useState(false);

  const [update, setUpdate] = useState("");

  const [ind, setInd] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (el) => {
    setShow(true);
    setUpdate(el);
  };
  const updateFun = () => {
    dispatch(update_data(update, ind));
    handleClose();
  };

  //----------- delete function---------
  const [deleteAlert, setDeleteAlert] = useState(false);
  const deleteItem = (id) => {
    dispatch(remove(id));
    setDeleteAlert(true);
  };
  useEffect(() => {
    if (deleteAlert === true) {
      setTimeout(() => {
        setDeleteAlert(false);
      }, 4000);
    }
  }, [deleteAlert]);

  return (
    <div className="todo-data col-lg-5 mx-auto mt-4">
      {User_data.map((item, index) => (
        <div
          className="todo-container"
          style={{
            background: "#dcdde1",
            height: "40px",
            borderRadius: "3px",
            marginBottom: "10px",
          }}
          key={index}
        >
          <li
            style={{
              listStyle: "none",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              marginRight: "10px",
            }}
            className="d-flex align-items-center ps-2"
          >
            {item}
          </li>
          <div className="edt-dlt">
            <EditIcon
              style={{ color: "#3c40c6", cursor: "pointer" }}
              onClick={() => {
                handleShow(item);
                setInd(index);
              }}
            />
            <VisibilityIcon
              style={{ color: "#1dd1a1", cursor: "pointer" }}
              onClick={() => {
                setShoweye(true);
                setShoweyeValue(item);
              }}
            />
            <DeleteIcon
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => deleteItem(index)}
            />
          </div>
        </div>
      ))}
      {/* ---------show model-------- */}
      <Modal show={showeye}>
        <Modal.Body>{showeyeValue}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShoweye(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* ----------edit model----------- */}
      <Modal show={show} onHide={handleClose}>
        <h4 className="text-center mt-2">Update Your Task</h4>
        <Modal.Header>
          <div className="todo col-lg-5 mx-auto d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
            />
          </div>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => updateFun()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {deleteAlert ? (
        <Alert
          variant={"danger"}
          style={{
            position: "absolute",
            top: "60px",
            right: "0px",
            left: "0px",
            height: "35px",
          }}
          className="col-lg-5 mx-auto d-flex align-items-center justify-content-center"
        >
          Your Task is deleted Successfully!
        </Alert>
      ) : (
        " "
      )}
    </div>
  );
}

export default Todo;
