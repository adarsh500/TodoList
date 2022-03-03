import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditTaskPopup = ({ show, hide, updateTask, taskObj }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
    
  useEffect(() => {
      setTask(taskObj.Name);
      setDescription(taskObj.Description);
  }, [])
    

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // (or) by using array destructuring
    // const { name, value } = e.target;

    if (name === "taskName") {
      setTask(value);
    } else {
      setDescription(value);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj['Name'] = task;
    tempObj['Description'] = description;
    updateTask(tempObj)
  };

  return (
    <Modal show={show} onHide={hide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="form-group">
            <label>Task name</label>
            <input
              type="text"
              className="form-control"
              value={task}
              onChange={handleChange}
              name="taskName"
            ></input>
          </div>
          <br></br>
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="5"
              className="form-control"
              value={description}
              onChange={handleChange}
              name="taskDescription"
            ></textarea>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTaskPopup;
