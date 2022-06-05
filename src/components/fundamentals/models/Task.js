const Task = ({task}) => {
    return (
        <li className="taskItem">
            <h5>{task.label} {task.id+1}</h5>
            <p>{task.message}</p>
        </li>
    );
};

export default Task;