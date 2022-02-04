import React from "react";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreateTask = ({ show, hide, save }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

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

  const handleSave = () => {
    if (task && description) {
      let taskObj = {};
      taskObj["Name"] = task;
      taskObj["Description"] = description;
      save(taskObj);
      setTask("");
      setDescription("");
    }
  };

  return (
    <Modal show={show} onHide={hide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
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
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateTask;
