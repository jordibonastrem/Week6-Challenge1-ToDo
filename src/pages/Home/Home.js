import React, { useEffect } from "react";

import Form from "../../components/Form/Form";
import TaskList from "../../components/TaskList/TaskList";
import useTasks from "../../hooks/useTasks";

const Home = () => {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <section>
      <h1>TO DO APP</h1>
      <Form></Form>
      <TaskList tasks={tasks}></TaskList>
    </section>
  );
};

export default Home;
