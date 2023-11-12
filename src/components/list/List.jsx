import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import css from './List.module.css'


import { LIST_TYPES } from '../../config'
import FormAddNewTask from '../forms/FormAddNewTask'
import FormMoveTasks from '../move/FormMoveTasks'

const List = (props) => {
    const { title, type, tasks, addNewTask, changeTaskStatus, backlogTask, readyTask, inProgressTask } = props
    const [isFormVisible, setFormVisible] = useState(false)
    const [isClicked, setClicked] = useState(false)


    const handleClick = () => {
        setFormVisible(!isFormVisible);
        setClicked(!isClicked)
    }

    const formSubmit = (title, description) => {
        addNewTask(title, description)
        setFormVisible(false)
        setClicked(!isClicked)
    }
    const changeStatus = (selectedTask, currentStatus) => {
        changeTaskStatus(selectedTask, currentStatus)
        setClicked(!isClicked)
        setFormVisible(false)
    }

    return (
        <div className={css.list}>
            <h2 className={css.h2}>{title}</h2>

            {tasks.map(task => {
                return (
                    <Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
                        <div className={css.taskTitle}><p className={css.task}>{task.title}</p></div>
                    </Link>
                )
            })}

            {type === LIST_TYPES.BACKLOG && isFormVisible && (
                <FormAddNewTask formSubmit={formSubmit} />)}
            {type === LIST_TYPES.BACKLOG && (
                <button onClick={handleClick} className={isClicked ? css.novisible : css.addButton}>+ Add card</button>
            )}

            {type === LIST_TYPES.READY && isFormVisible && (
                <FormMoveTasks currentStatus={LIST_TYPES.READY} changeStatus={changeStatus} />)}
            {type === LIST_TYPES.READY && (
                <button onClick={handleClick} className={isClicked ? css.novisible : css.addButton} disabled={backlogTask ? false : true}>+ Add card</button>
            )}
            {type === LIST_TYPES.IN_PROGRESS && isFormVisible && (
                <FormMoveTasks currentStatus={LIST_TYPES.IN_PROGRESS} changeStatus={changeStatus} />)}
            {type === LIST_TYPES.IN_PROGRESS && (
                <button onClick={handleClick} className={isClicked ? css.novisible : css.addButton} disabled={readyTask ? false : true}>+ Add card</button>
            )}
            {type === LIST_TYPES.FINISHED && isFormVisible && (
                <FormMoveTasks currentStatus={LIST_TYPES.FINISHED} changeStatus={changeStatus} />)}
            {type === LIST_TYPES.FINISHED && (
                <button onClick={handleClick} className={isClicked ? css.novisible : css.addButton} disabled={inProgressTask ? false : true}>+ Add card</button>
            )}
        </div>

    )
}

export default List