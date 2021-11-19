const TaskItem = (props) => {
    const {task} =props
    return (
        <tr key={task.id}>
            <td align="center">{task.id}</td>
            <td>{task.title}</td>
            <td align="center">{task.completed ? 'Sim' : 'Não'}</td>
        </tr>
    );
};
export default TaskItem;