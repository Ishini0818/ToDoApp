import InputTasks from "../components/InputTasks";
import { useEffect, useState } from "react";
import Tasks from "../components/Tasks";
import { getTasks } from "../services/taskService";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [updateItem, setUpdateItem] = useState();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await getTasks();
        setTasks([...data]);
      } catch (error) {
        toast.error("Unable to fetch data.");
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-start items-center gap-8 mt-10">
      <p className="text-8xl font-semibold text-gray-800">Todo List</p>
      <InputTasks
        tasks={tasks}
        setTasks={setTasks}
        updateItem={updateItem}
        setUpdateItem={setUpdateItem}
      />
      <Tasks
        taskList={tasks}
        setTasks={setTasks}
        updateItem={updateItem}
        setUpdateItem={setUpdateItem}
      />
    </div>
  );
};

export default Dashboard;
