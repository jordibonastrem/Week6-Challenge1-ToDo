import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTaskThunk, loadTasksThunk } from "../redux/thunks/Thunks";

const useTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.tasks);

  const loadTasks = useCallback(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);

  const createTask = (task) => {
    console.log(task);
    dispatch(createTaskThunk(task));
  };
  return {
    tasks,
    loadTasks,
    createTask,
  };
};

export default useTasks;
