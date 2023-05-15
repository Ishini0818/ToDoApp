const Task = (props) => {
    const handleDelete = () => {
        let tasks = props.tasks;
        const index = tasks.findIndex(item => item._id === props.task._id);

        fetch(`http://localhost:5000/tasks/${tasks[index]._id}`, {
        method: "DELETE",
        headers: {
            Authorization: `${localStorage.getItem("token")}`,
        },
        })
        .then(() => console.log("Successfully deleted."))

        tasks.splice(index, 1);
        props.setTasks([ ...tasks ]);
    }

    const getClasses = () => {
        if (props.task.complited)
            return "h-auto w-full bg-gray-200 rounded-md text-gray-600 font-semibold flex flex-row justify-between items-center px-5 py-2 hover:bg-gray-300 shadow-sm";
        return "h-auto w-full bg-teal-200 rounded-md text-gray-800 font-semibold flex flex-row justify-between items-center px-5 py-2 hover:bg-teal-300 shadow-sm";
    }

    const handleDone = () => {
        let tasks = props.tasks;
        const index = tasks.findIndex(item => item._id === props.task._id);
        tasks[index].complited = !tasks[index].complited;

        fetch(`http://localhost:5000/tasks/${tasks[index]._id}`, {
        method: "PATCH",
        headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            description: tasks[index].description,
            complited: tasks[index].complited
        })
        })
        .then(() => console.log("Successfully Updated."))

        props.setTasks([ ...tasks ]);

    }

    return ( 
        <div className={getClasses()}>
            <p>{props.task.description}</p>
            <div className="flex flex-row gap-5 items-center">
                <button onClick={handleDone}>{props.task.complited ? "🔁" :"✔️"}</button>
                <button onClick={handleDelete}>❌</button>
            </div>
        </div>
    );
}

export default Task;