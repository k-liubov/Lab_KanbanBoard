
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import css from './Details.module.css'
import Cross from '../../assets/cross.svg'

const Details = props => {
    const params = useParams()
    const taskId = params.taskId
    const { tasks, setTasks } = props
    const task = tasks.find(task => task.id === taskId)
    const [butSave, setButSave] = useState(false)

    const textArea = task.description


    const handleInput = () => {
        setButSave(true)
    }

    const handleSave = (e) => {
        e.preventDefault();
        const text = document.getElementById('descr')
        const newDescr = text.value;
        const updatedTasksDescr = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, description: newDescr }
            }
            return task
        })
        console.log(updatedTasksDescr)
        setTasks(updatedTasksDescr)

    }


    return (
        <div className={css.wrapper}>
            <div className={css.wrapperC}>
                <div className={css.detailsTitle}>
                    <h2 className={css.title}>{task.title}</h2>
                    <Link to='/' ><img src={Cross} alt='src' className={css.cross} /></Link>
                </div>
                <form>
                    <textarea name="description" id='descr' className={css.textarea} rows='10' onChange={handleInput}>{textArea}</textarea>
                    {
                        butSave ?
                            (<button className={css.butSave} onClick={handleSave}>Save</button>)
                            : ('')}
                </form>
            </div> </div>
    )
}


export default Details