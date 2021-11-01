import actionTypes from "../actions/actionTypes";

const taskReducer = (tasks = [], action) => {
  let newTaskState = tasks;
  switch (action.type) {
    case actionTypes.loadTasks:
      newTaskState = [...action.tasks];
      break;
    case actionTypes.createTask:
      newTaskState = [...tasks, action.task];
      break;

    default:
    // throw new Error("action non existent.");
  }
  return newTaskState;
};

export default taskReducer;
