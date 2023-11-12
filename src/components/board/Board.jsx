import { LIST_TYPES, LIST_COPY } from '../../config'
import css from './Board.module.css'
import uniqid from 'uniqid'
import List from '../list/List'

const Board = (props) => {
    const { tasks, setTasks } = props
    const backlogTask = tasks.find(task => task.status === 'backlog')
    const readyTask = tasks.find(task => task.status === 'ready')
    const inProgressTask = tasks.find(task => task.status === 'inProgress')

    const addNewTask = (title, description) => {
        const newTask = {
            id: uniqid(),
            title,
            description,
            created: new Date().toISOString(),
            status: LIST_TYPES.BACKLOG
        }
        setTasks([...tasks, newTask])
    }

    const changeTaskStatus = (selectedTask, currentStatus) => {
        const updatedStatus = tasks.map(task => {
            if (task.id === selectedTask) {
                return { ...task, status: currentStatus }

            }
            return task
        })
        setTasks(updatedStatus)

    }



    return (
        <div className={css.main}>
            {Object.values(LIST_TYPES).map(type => {
                const listTasks = tasks.filter(task => task.status === type)
                return (
                    <List
                        key={LIST_COPY[type]}
                        type={type}
                        title={LIST_COPY[type]}
                        tasks={listTasks}
                        addNewTask={addNewTask}
                        changeTaskStatus={changeTaskStatus}
                        backlogTask={backlogTask}
                        readyTask={readyTask}
                        inProgressTask={inProgressTask}
                    />
                )
            })}

        </div>
    )
}

export default Board