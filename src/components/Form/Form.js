import React, { useState } from "react";
import useTasks from "../../hooks/useTasks";

const Form = () => {
  const [title, setTitle] = useState();
  const [desciption, setDescription] = useState();
  const { createTask } = useTasks();

  const handleSubmit = (event) => {
    createTask({ title: title, desciption: desciption });
    event.preventDefault();
  };
  const handleOnChange = (event) => {
    if (event.target.id === "description") {
      setDescription(event.target.value);
    } else {
      setTitle(event.target.value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" onChange={handleOnChange} />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleOnChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
