import React, { useState } from "react";
import EditTask from "../modals/EditTask";



const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#DC143C",
      secondaryColor: "#FDF1F1",
    },
  ];

  const handleDelete = () => {
    deleteTask(index);
  };

  const toggle = () => {
    setModal(!modal);
  }

  const updateTask = (obj) => {
    updateListArray(obj, index)
  }

  return (
    <div className="Card mr-5">
      <div className="card-wrapper mr-5">
        <div
          className="card-top"
          style={{ backgroundColor: colors[index % 3].primaryColor }}
        ></div>
        <div className="task-holder">
          <span
            className="card-header"
            style={{
              backgroundColor: colors[index % 3].secondaryColor,
              borderRadius: "10px",
            }}
          >
            {taskObj.Name}
          </span>
          <p className="mt-3">{taskObj.Description}</p>

          <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
            <i
              className="far fa-edit mr-3"
              style={{
                margin: "5px",
                color: colors[0].primaryColor,
                cursor: "pointer",
              }}
              onClick={() => setModal(true)}
            ></i>
            <i
              className="fa-solid fa-trash"
              style={{
                // size:
                margin: "5px",
                color: "#DC143C",
                cursor: "pointer",
              }}
              onClick={handleDelete}
            ></i>
          </div>
        </div>
      </div>
      <EditTask show={modal} hide={toggle} updateTask={updateTask} taskObj={taskObj}></EditTask>
    </div>
  );
};

export default Card;
