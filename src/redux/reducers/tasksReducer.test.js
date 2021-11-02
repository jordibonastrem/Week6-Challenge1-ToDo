import { getRandomTasks, getRandomTask } from "../../factories/tasksFactory";
import actionTypes from "../actions/actionTypes";

describe("Given a tasksReducer reducer", () => {
  describe("When it receives an empty tasks list and a load action with three tasks", () => {
    test("Then it should return a new task list with the three tasks received", () => {
      const initialTasks = [];
      const tasksList = getRandomTasks(3);

      const action = {
        type: actionTypes.loadTasks,
        tasks: tasksList,
      };
    });
  });
});
