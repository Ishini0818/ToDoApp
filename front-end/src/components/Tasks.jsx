import Task from "./Task";

const Tasks = (props) => {
    return ( 
        <div className="w-5/12 h-auto flex flex-col gap-3 items-center justify-start">
            {props.taskList.map(element => <Task key={element._id} task={element} setTasks={props.setTasks} tasks={props.taskList}/> )}
        </div>
    );
}

export default Tasks;