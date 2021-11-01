import actionTypes from "../actions/actionTypes";

const taskReducer = (tasks, action) => {
  let newTaskState;
  switch (action.type) {
    case actionTypes.loadTasks:
      newTaskState = [...action.tasks];
      break;
    default:
      throw new Error("action non existent.");
  }
  return newTaskState;
};

export default taskReducer;
