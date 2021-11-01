import React from "react";
import PropTypes from "prop-types";

const Task = ({ id, title, description }) => {
  return (
    <div>
      <h3>
        {id}: {title}
      </h3>
      <p>{description}</p>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Task;
