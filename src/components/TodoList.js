import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "./Card.js";
import CreateTask from "../modals/CreateTask";

const TodoList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("taskList");

    //since we stored the data in JSON form, we parse it to
    //convert to array form
    if (localData) {
      let obj = JSON.parse(localData);
      setTaskList(obj);
    }
  }, []);

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);

    //we can't store array in local storage, so we are converting
    //to JSON string
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModalShow(false);
    console.log(taskList);
  };

  const deleteTask = (index) => {
    let templist = taskList;
    templist.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(templist));
    setTaskList(templist);
    window.location.reload();
  }

  const updateListArray = (obj, index) => {
    let templist = taskList;
    templist[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(templist));
    setTaskList(templist);
    window.location.reload();
  }

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
          <Card taskObj={obj} key={index} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>
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
