const Task = (props) => {
    const handleClick = () => {
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

    return ( 
        <div className="h-auto w-full bg-teal-200 rounded-md text-gray-800 font-semibold flex flex-row justify-between items-center px-5 py-2 hover:bg-teal-300 shadow-sm">
            <p>{props.task.description}</p>
            <button className="font-bold text-gray-900" onClick={handleClick}>X</button>
        </div>
    );
}

export default Task;