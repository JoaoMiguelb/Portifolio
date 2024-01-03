// React
import { useState } from 'react';

// Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// Componente
import Menu from './menu/index';

// CSS
import './styles.css';

const Header = () => {
    const [visible, setVisible] = useState(false);
    

    const handleClickVisible = () => {
        setVisible(!visible);
    }

    return (
        <header>
            {visible
                ? <div className='menu-hamburguer'><IoMdClose onClick={handleClickVisible} /></div>
                : <div className="menu-hamburguer" onClick={handleClickVisible}><RxHamburgerMenu /></div>
            }
            <Menu visible={visible} />
            
            <div className="header-icons">
                <a href="https://github.com/JoaoMiguelb" target='_blank'>
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/jm-dev/">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/joaomiguel615/">
                    <FaInstagram />
                </a>
            </div>
        </header>
    )
}

export default Header;
