import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTaskThunk,
  deleteTaskThunk,
  loadTasksThunk,
} from "../redux/thunks/Thunks";

const useTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.tasks);

  const loadTasks = useCallback(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);

  const createTask = (task) => {
    dispatch(createTaskThunk(task));
  };
  const deleteTask = (task) => {
    dispatch(deleteTaskThunk(task.id));
  };
  return {
    tasks,
    loadTasks,
    createTask,
    deleteTask,
  };
};

export default useTasks;
