const TaskList = ({tasks}) => {
    return (
    <>
        <ul>
            { tasks.map( (task) => {
                    return <li key={task.id}>
                            <p>{task.id}</p>
                            <p>{task.label}</p>
                            <p>{task.message}</p>
                        </li>}
                    ) }
        </ul>
    </>
    );
};

export default TaskList;