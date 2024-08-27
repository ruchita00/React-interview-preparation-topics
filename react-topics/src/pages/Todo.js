import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [tasksInput, setTasksInput] = useState("");

  const handleAdd = () => {
    setTasks([...tasks, tasksInput]);
    setTasksInput("");
  };
  const handleEdit = (index, text) => {
    const newValue = [...tasks];
    newValue[index] = text;
    setTasks(newValue);
  };
  const handleDelete = (index) => {
    const newValue = [...tasks];
    newValue.splice(index, 1);
    setTasks(newValue);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTasksInput(e.target.value)}
        value={tasksInput}
        placeholder="type something here"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => handleEdit(index, prompt("edit here", tasks))}
            >
              Edit
            </button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
