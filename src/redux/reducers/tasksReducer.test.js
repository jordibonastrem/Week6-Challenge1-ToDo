import { getRandomTasks, getRandomTask } from "../../factories/tasksFactory";
import actionTypes from "../actions/actionTypes";
import taskReducer from "./tasksReducer";

describe("Given a tasksReducer reducer", () => {
  describe("When it receives an empty tasks list and a load action with three tasks", () => {
    test("Then it should return a new task list with the three tasks received", () => {
      const initialTasks = [];
      const tasksList = getRandomTasks(3);

      const action = {
        type: actionTypes.loadTasks,
        tasks: tasksList,
      };
      const newTaskList = taskReducer(initialTasks, action);
      expect(newTaskList).toEqual(tasksList);
    });
  });
  describe("When it receives a tasks list and a create action with a new task", () => {
    test("Then it should return a new task list including the new task", () => {
      const initialTasks = getRandomTasks(3);
      const newTask = getRandomTask();
      const action = {
        type: actionTypes.createTask,
        task: newTask,
      };

      const newTaskList = taskReducer(initialTasks, action);

      expect(newTaskList).toContainEqual(newTask);
    });
  });
});
