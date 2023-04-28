import InputTasks from "../components/InputTasks";
import { useState } from "react";
import Tasks from "../components/Tasks";

const Dashboard = () => {
    const [ tasks, setTasks ] = useState([]);

    return ( 
        <div className="h-screen w-full flex flex-col justify-start items-center gap-8 mt-10">
            <p className="text-8xl font-semibold text-gray-800">Todo List</p>
            <InputTasks setTasks={setTasks} />
            <Tasks taskList={tasks} setTasks={setTasks} />
        </div>
    );
}

export default Dashboard;