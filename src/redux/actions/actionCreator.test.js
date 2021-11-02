import { getRandomTask, getRandomTasks } from "../../factories/tasksFactory";
import {
  createTaskAction,
  deleteTaskAction,
  loadTasksAction,
  updateTaskAction,
} from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given a load actionCreator", () => {
  describe("When it receives a list of tasks", () => {
    test("Then it should return a load type action with the tasks received", () => {
      const tasksList = getRandomTasks();
      const expectedAction = {
        type: actionTypes.loadTasks,
        tasks: tasksList,
      };

      const actionResult = loadTasksAction(tasksList);
      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a create actionCreator", () => {
  describe("When it receives a task", () => {
    test("Then it should return a create type action with the task received", () => {
      const newTask = getRandomTask();
      const expectedAction = {
        type: actionTypes.createTask,
        task: newTask,
      };

      const actionResult = createTaskAction(newTask);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given an update actionCreator", () => {
  describe("When it receives a task", () => {
    test("Then it should return a update type action with the task received", () => {
      const modifiedTask = getRandomTask();
      const expectedAction = {
        type: actionTypes.updateChallenge,
        task: modifiedTask,
      };

      const actionResult = updateTaskAction(modifiedTask);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a delete actionCreator", () => {
  describe("When it receives an id", () => {
    test("Then it should return a delete type action with the id received", () => {
      const id = 2;
      const expectedAction = {
        type: actionTypes.deleteTask,
        id,
      };

      const actionResult = deleteTaskAction(id);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
