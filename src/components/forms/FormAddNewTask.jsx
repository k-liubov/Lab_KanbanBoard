
import { useState } from 'react'

import css from './FormAddNewTask.module.css'

const FormAddNewTask = props => {
    const { formSubmit } = props
    const [values, setValues] = useState({
        title: '',
        description: 'This task has no description'
    })
    const handleChange = (e) => {
        const fieldName = e.target.name
        setValues({ ...values, [fieldName]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.title) {
            formSubmit(values.title, values.description)

            //setFormVisible(false)
        } //обработать пустое значение title
    }
    return (
        <form className={css.addtask} onSubmit={handleSubmit}>
            <input
                className={css.taskTitle}
                id='taskTitle'
                name='title'
                type='text'
                value={values.title}
                onChange={handleChange}
            />
            <button type='submit' className={css.addSubmit}>Submit</button>

        </form>

    )
}

export default FormAddNewTask