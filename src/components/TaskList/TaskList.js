import React from "react";
import useTasks from "../../hooks/useTasks";
import Task from "../Task/Task";

const TaskList = ({ tasks }) => {
  const { deleteTask } = useTasks();

  const handleOnclick = (id) => {
    const taskToDelete = tasks.find((task) => task.id === id);
    deleteTask(taskToDelete);
  };
  return (
    <div>
      <h2>ADD NEW TASK</h2>
      <ul>
        {tasks.map(({ id, title, desciption }) => {
          return (
            <Task
              id={id}
              key={id}
              title={title}
              description={desciption}
              actionOnClick={() => handleOnclick(id)}
            ></Task>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
