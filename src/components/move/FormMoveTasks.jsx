
import css from './FormMoveTasks.module.css'
import { useState, useEffect } from 'react'



const FormMoveTasks = (props) => {
    const local = JSON.parse(window.localStorage.getItem('tasks')) || []
    const [tasks, setTasks] = useState(local)

    const { changeStatus, currentStatus } = props
    useEffect(() => {
        window.localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    console.log(tasks)
    const handleChange = (e) => {
        e.preventDefault()
        const selectedTask = e.target.value
        changeStatus(selectedTask, currentStatus)
        const updatedStatus = tasks.map(task => {
            if (task.id === selectedTask) {
                return { ...task, status: currentStatus }

            }
            return task
        })
        setTasks(updatedStatus)
    }


    return (
        <div>
            <select className={css.select} onChange={handleChange}>
                <option>Please, select</option>
                {Object.values(tasks).map(task => {
                    if (currentStatus === 'ready') {
                        if (task.status === 'backlog') {
                            return <option key={task.title} value={task.id} >{task.title}</option>
                        }
                    }
                    if (currentStatus === 'inProgress') {
                        if (task.status === 'ready') {
                            return <option key={task.title} value={task.id} >{task.title}</option>
                        }
                    }

                    if (currentStatus === 'finished') {
                        if (task.status === 'inProgress') {
                            return <option key={task.title} value={task.id} >{task.title}</option>
                        }
                    }

                })}
            </select>
        </div>
    )
}

export default FormMoveTasks