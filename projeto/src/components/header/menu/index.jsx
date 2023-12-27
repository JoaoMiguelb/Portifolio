// Menu.js
import { NavLink } from 'react-router-dom';

import './styles.css'

const Menu = ({ visible }) => {

    return (
        <ul className={`menu ${visible ? 'visible' : ''}`}>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/about' >Sobre mim</NavLink>
            <NavLink to='/skills' >Skills</NavLink>
            <NavLink to='/projects' >Projetos</NavLink>
        </ul>
    );
};

export default Menu;
    