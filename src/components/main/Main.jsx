import { Routes, Route } from 'react-router-dom';
import Details from '../details/Details'
import Board from '../board/Board'
import css from './Main.module.css'

const Main = (props) => {
    return (
        <main className={css.main}>
            <Routes>
                <Route exact path={'/'} element={<Board {...props} />} />
                <Route path={'/tasks/:taskId'} element={<Details {...props} />} />
            </Routes>
        </main>
    )
}

export default Main