const Task = (props) => {
    const handleClick = () => {
        props.setTasks(prev => [...prev.splice(prev.indexOf(props.task), 1)])
    }

    return ( 
        <div className="h-auto w-full bg-teal-200 rounded-md text-gray-800 font-semibold flex flex-row justify-between items-center px-5 py-2 hover:bg-teal-300 shadow-sm">
            <p>{props.task}</p>
            <button className="font-bold text-gray-900" onClick={handleClick}>X</button>
        </div>
    );
}

export default Task;