import { toast } from "react-toastify";
import { deleteTask, updateTask } from "../services/taskService";

const Task = (props) => {
  const handleDelete = async () => {
    const prevTasks = [...props.tasks];
    let tasks = props.tasks;
    const index = tasks.findIndex((item) => item._id === props.task._id);
    const id = tasks[index]._id;

    try {
      const { data } = await deleteTask(id);
      tasks.splice(index, 1);
      props.setTasks([...tasks]);
    } catch (error) {
      toast.error("Something went wrong");
      props.setTasks([...prevTasks]);
    }
  };

  const getClasses = () => {
    if (props.task.complited)
      return "h-auto w-full bg-gray-200 rounded-md text-gray-600 font-semibold flex flex-row justify-between items-center px-5 py-2 hover:bg-gray-300 shadow-sm";
    return "h-auto w-full bg-teal-200 rounded-md text-gray-800 font-semibold flex flex-row justify-between items-center px-5 py-2 hover:bg-teal-300 shadow-sm";
  };

  const handlePatch = async (tasks, index) => {
    const id = tasks[index]._id;
    const body = {
      description: tasks[index].description,
      complited: tasks[index].complited,
    };
    return await updateTask(id, body);
  };

  const handleDone = async () => {
    const prevTasks = [...props.tasks];
    let tasks = props.tasks;
    const index = tasks.findIndex((item) => item._id === props.task._id);
    tasks[index].complited = !tasks[index].complited;

    try {
      await handlePatch(tasks, index);
      props.setTasks([...tasks]);
    } catch (error) {
      toast.error("Something went wrong!");
      props.setTasks([...prevTasks]);
    }
  };

  const handleEdit = () => {
    props.setUpdateItem(props.task);
  };

  return (
    <div className={getClasses()}>
      <p>{props.task.description}</p>
      <div className="flex flex-row gap-5 items-center">
        <button onClick={handleEdit}>🖋️</button>
        <button onClick={handleDone}>
          {props.task.complited ? "🔁" : "✔️"}
        </button>
        <button onClick={handleDelete}>❌</button>
      </div>
    </div>
  );
};

export default Task;
