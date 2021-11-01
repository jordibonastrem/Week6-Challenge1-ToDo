import React from "react";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
