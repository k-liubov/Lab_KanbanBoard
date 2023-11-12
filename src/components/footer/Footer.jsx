
import css from './Footer.module.css'

const Footer = (props) => {
    const { tasks } = props
    const backlogTask = tasks.filter(task => task.status === 'backlog')
    const finishedTask = tasks.filter(task => task.status === 'finished')


    return (
        <div className={css.footer}>
            <div className={css.taskAmount}>
                <p>Active tasks: {backlogTask.length} </p>
                <p>Finished tasks: {finishedTask.length}</p>
            </div>
            <div className={css.kanban}>
                <p>Kanban board by Liubov, 2023</p>
            </div>
        </div>
    )
}

export default Footer