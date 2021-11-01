import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadTasksThunk from "../redux/thunks/loadTasksThunk";

const useTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.tasks);

  const loadTasks = useCallback(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);

  return {
    tasks,
    loadTasks,
  };
};

export default useTasks;
