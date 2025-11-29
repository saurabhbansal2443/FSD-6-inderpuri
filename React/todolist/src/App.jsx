import React from "react";
import { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleBtnClick = () => {
    if (task.trim().length === 0) return;
    setTaskList([...taskList, task]);
    setTask("");
  };

  return (
    <div style={style.root}>
      <div style={style.inputRow}>
        <input
          onChange={(event) => {
            setTask(event.target.value);
          }}
          style={style.input}
          type="text"
          placeholder="Write a task..."
          value={task}
        />
        <button onClick={handleBtnClick} style={style.addBtn}>
          Add
        </button>
      </div>

      <div style={style.todoContainer}>
        {taskList.map((task) => (
          <div style={style.todo}>
            <div style={style.text}>{task}</div>
            <button style={style.deleteBtn}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

const style = {
  root: {
    width: "100%",
    minHeight: "100vh",
    background: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: 40,
    fontFamily: "sans-serif",
  },
  inputRow: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    width: "260px",
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "16px",
  },
  addBtn: {
    padding: "10px 18px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
  todoContainer: {
    width: "330px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  todo: {
    background: "white",
    padding: "14px 16px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
  },
  text: {
    fontSize: "16px",
    fontWeight: "500",
  },
  deleteBtn: {
    padding: "6px 12px",
    background: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  },
};
