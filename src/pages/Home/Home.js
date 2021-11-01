import React from "react";
import Form from "../../components/Form/Form";
import TaskList from "../../components/TaskList/TaskList";

const tasks = [
  {
    id: "1",
    title: "do homework",
    description: "clean bedroom",
    time_frame: "15:00-16:00",
  },
  {
    id: "2",
    title: "do this",
    description: "clean loo",
    time_frame: "15:00-16:00",
  },
  {
    id: "4",
    title: "do that",
    description: "clean that",
    time_frame: "15:00-16:00",
  },
];

const Home = () => {
  return (
    <section>
      <h1>TO DO APP</h1>
      <Form></Form>
      <TaskList tasks={tasks}></TaskList>
    </section>
  );
};

export default Home;