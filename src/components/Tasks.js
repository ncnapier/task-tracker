import Task from './Task'
//create a list of all tasks using map method:
const Tasks = ({tasks, onDelete, onToggle}) => {
    
  return (
    <>
    {tasks.map((task) => (
    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
    ))}
    </>
  )
}

export default Tasks