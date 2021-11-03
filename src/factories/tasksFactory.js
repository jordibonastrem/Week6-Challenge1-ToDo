import { lorem } from "faker/locale/es";
import { Factory } from "fishery";

const factory = Factory.define(({ sequence }) => ({
  title: lorem.sentence(6),
  description: lorem.sentence(15),
}));

const getRandomTask = () => factory.build();
const getRandomTasks = (count = 3) => factory.buildList(count);

export { getRandomTask };
export { getRandomTasks };
