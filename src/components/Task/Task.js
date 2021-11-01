import React from "react";
import PropTypes from "prop-types";
import "./Task.css";

const Task = ({ id, title, description, time_frame }) => {
  return (
    <div className="task-box">
      <h3>
        {id}: {title}
      </h3>
      <h4>
        Description
        <p>{description}</p>
      </h4>

      <h4>
        Time Frame
        <p>{time_frame}</p>
      </h4>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Task;
