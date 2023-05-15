import { useState, useEffect } from "react";

const InputTasks = (props) => {
  const [task, setTask] = useState("");

  useEffect(() => {
    if (props.updateItem) {
      setTask(props.updateItem.description);
    }
  }, [props.updateItem]);

  const handleInsert = () => {
    fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      body: JSON.stringify({
        description: task,
        complited: false,
      }),
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => props.setTasks((prev) => [...prev, data]));
  };

  const handlePatch = (tasks, index) => {
    fetch(`http://localhost:5000/tasks/${tasks[index]._id}`, {
      method: "PATCH",
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: tasks[index].description,
        complited: tasks[index].complited,
      }),
    }).then(() => console.log("Successfully Updated."));
  };

  const handleClick = () => {
    if (props.updateItem) {
      const tasks = props.tasks;
      const index = tasks.findIndex(
        (task) => task._id === props.updateItem._id
      );
      tasks[index].description = task;
      handlePatch(tasks, index);
      props.setTasks([...tasks]);
      props.setUpdateItem();
    } else handleInsert();
    setTask("");
  };

  return (
    <div className="w-5/12 h-auto flex flex-row justify-around">
      <input
        type="text"
        className="w-8/12 bg-slate-100 border border-gray-500 rounded-md px-2 shadow-md"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="px-5 py-2 bg-blue-500 text-white font-semibold capitalize hover:bg-blue-700 shadow-md rounded-md"
        onClick={handleClick}
      >
        {!props.updateItem ? "Add" : "Update"}
      </button>
    </div>
  );
};

export default InputTasks;
