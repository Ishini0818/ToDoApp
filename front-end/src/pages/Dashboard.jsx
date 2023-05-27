import InputTasks from "../components/InputTasks";
import { useEffect, useState } from "react";
import Tasks from "../components/Tasks";
import { getTasks } from "../services/taskService";
import userService from "../services/userService";
import { toast } from "react-toastify";
import Navbar from "../components/navbar";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [updateItem, setUpdateItem] = useState();
  const [user, setUser] = useState({});

  const fetchTasks = async () => {
    try {
      const { data } = await getTasks();
      setTasks([...data]);
    } catch (error) {
      toast.error("Unable to fetch data.");
    }
  };

  const getCurrentUser = async () => {
    try {
      const { data } = await userService.getUser();
      setUser(data);
    } catch (error) {
      toast.error("Invalid user id!");
    }
  };

  useEffect(() => {
    fetchTasks();
    getCurrentUser();
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-start items-center gap-8">
      <Navbar user={user} />
      <p className="text-6xl font-semibold text-gray-800">Todo List</p>
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
