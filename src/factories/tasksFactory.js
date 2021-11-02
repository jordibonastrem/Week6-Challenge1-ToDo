import { datatype } from "faker";
import { lorem } from "faker/local/es";
import { Factory } from "fishery";

const factory = Factory.define(({ sequence }) => ({
  title: lorem.sentence(6),
  description: lorem.sentence(15),
}));

export const getRandomTask = () => factory.build();
export const getRandomTasks = (count = 3) => factory.buildList(count);
