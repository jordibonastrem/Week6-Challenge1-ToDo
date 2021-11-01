import React from "react";
import Task from "../Task/Task";

const TaskList = ({ tasks }) => {
  console.log(tasks);
  return (
    <div>
      <h2>ADD NEW TASK</h2>
      <ul>
        {tasks.map(({ id, title, desciption }) => {
          return <Task key={id} title={title} description={desciption}></Task>;
        })}
      </ul>
    </div>
  );
};

export default TaskList;
