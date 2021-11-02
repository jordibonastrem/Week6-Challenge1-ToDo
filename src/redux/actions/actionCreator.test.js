import { getRandomTask, getRandomTasks } from "../../factories/tasksFactory";
import { createTaskAction, loadTasksAction } from "./actionCreators";
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
