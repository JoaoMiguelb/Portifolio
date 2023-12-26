// react
import { useState } from 'react'


// icons
import { RxHamburgerMenu } from "react-icons/rx";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// CSS
import './styles.css'
import Menu from './menu';

const Header = () => {
    const [visible, setVisible] = useState(false)

    const handleClickVisible = () => {
        setVisible(!visible)
    }

    return (
        <header>
            <div className="menu-hamburguer">
                <RxHamburgerMenu onClick={handleClickVisible}/>
                {visible && <Menu/>}
            </div>
            <div className="header-icons">
                <FaGithub />
                <FaLinkedin />
                <FaInstagram />
            </div>
        </header>
    )
}

export default Header