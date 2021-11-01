import React from "react";

import "./Task.css";

const Task = ({ title, description }) => {
  return (
    <div className="task-box">
      <h3>{title}</h3>
      <h4>
        Description
        <p>{description}</p>
      </h4>
    </div>
  );
};

export default Task;
