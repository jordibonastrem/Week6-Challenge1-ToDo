import React from "react";
import Task from "../Task/Task";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>ADD NEW TASK</h2>
      <ul>
        {tasks.map(({ id, title, description }) => {
          return (
            <Task
              key={id}
              id={id}
              title={title}
              description={description}
            ></Task>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
