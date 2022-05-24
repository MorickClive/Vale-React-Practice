const TaskList = ({tasks}) => {
    return (
    <>
        <h3>Added via component:</h3>
        <ul>
            {tasks.map( (task) => {
                    return <>
                        <li key={task.id}>
                            <p>{task.label}</p>
                            <p>{task.message}</p>
                        </li>
                    </>
                })
            }
        </ul>
    </>
    );
};

export default TaskList;