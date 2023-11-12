
import { useState, useEffect } from 'react'
import css from './Header.module.css'
import Logo from '../../assets/avatar.svg'



const Header = () => {
    const [clicked, setClick] = useState(false)
    const [userMenu, setUserMenu] = useState(false)


    const handleClick = () => {
        setClick(!clicked)
        setUserMenu(!userMenu)
    }
    return (
        <div className={css.header}>


            <h1 className={css.title}>
                Awesome Kanban Board
            </h1>
            <div className={css.avatar}>
                <img src={Logo} alt='avatar' />
                <div
                    className={css.arrow}
                    onClick={handleClick}
                >{clicked ? '∧' : '∨'}</div>

                {userMenu ? (
                    <div className={css.dropdown}>
                        <p>
                            Profile
                        </p>
                        <p>
                            Log Out
                        </p> </div>
                ) :
                    ''}


            </div>

        </div>
    )
}
export default Header