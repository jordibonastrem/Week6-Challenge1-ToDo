import {
  createTaskAction,
  deleteTaskAction,
  loadTasksAction,
} from "../actions/actionCreators";

export const loadTasksThunk = () => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);

  const tasks = await response.json();

  dispatch(loadTasksAction(tasks));
};

export const createTaskThunk = (task) => {
  return async (dispatch) => {
    const response = await fetch(process.env.REACT_APP_API_URL, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const tasks = await response.json();

    dispatch(createTaskAction(tasks));
  };
};

export const deleteTaskThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteTaskAction(id));
  }
};
