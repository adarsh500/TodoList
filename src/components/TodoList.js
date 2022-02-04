import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CreateTask from "../modals/CreateTask";

const TodoList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    setTaskList(tempList);
    setModalShow(false);
    console.log(taskList);
  };

  return (
    <>
      <div className="header text-center">
        <h1>Todo List</h1>
        <Button
          className="btn btn-primary mt-2"
          onClick={() => {
            setModalShow(true);
          }}
        >
          Create Task
        </Button>
      </div>

      <div className="task-container">
        {taskList.map((obj, index) => (
          <li  key={index}> {obj.Name}</li>
        ))}
      </div>

      <CreateTask
        show={modalShow}
        hide={() => setModalShow(false)}
        save={saveTask}
      ></CreateTask>
    </>
  );
};

export default TodoList;
