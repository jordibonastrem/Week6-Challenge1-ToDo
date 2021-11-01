import React from "react";

import "./Task.css";

const Task = ({ id, title, description, actionOnClick }) => {
  return (
    <div className="task-box">
      <h3>{title}</h3>
      <h4>
        Description
        <p>{description}</p>
      </h4>
      <button onClick={actionOnClick}>Delete</button>
    </div>
  );
};

export default Task;
