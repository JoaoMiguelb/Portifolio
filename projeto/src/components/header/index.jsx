// Header.js
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import './styles.css';
import Menu from './menu/index';

const Header = () => {
    const [visible, setVisible] = useState(false);
    

    const handleClickVisible = () => {
        setVisible(!visible);
    }

    return (
        <header>
            {visible
                ? <div><IoMdClose onClick={handleClickVisible} /></div>
                : <div className="menu-hamburguer" onClick={handleClickVisible}><RxHamburgerMenu /></div>
            }
            {visible && <Menu visible={visible} />}
            
            <div className="header-icons">
                <FaGithub />
                <FaLinkedin />
                <FaInstagram />
            </div>
        </header>
    )
}

export default Header;
