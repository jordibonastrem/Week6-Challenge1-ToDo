import { loadTasksAction } from "../actions/actionCreators";

const loadTasksThunk = () => {
  return async (dispatch) => {
    const response = await fetch(process.env.REACT_APP_API_URL);
    const tasks = await response.json();
    dispatch(loadTasksAction(tasks));
  };
};

export default loadTasksThunk;
