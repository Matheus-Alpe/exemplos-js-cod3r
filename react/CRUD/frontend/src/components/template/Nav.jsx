import './Nav.css'
import React from 'react'

import NavItem from './NavItem'

const Nav = props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home" pathAPI="/" label="Início"/>
            <NavItem icon="users" pathAPI="/users" label="Usuários"/>
        </nav>
    </aside>


export default Nav