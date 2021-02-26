import React from 'react'
import './NavItem.css'

const NavItem = props =>
    <a className="menu-link" href={props.pathAPI}>
        <i className={`fa fa-${props.icon}`}></i> {props.label}
    </a>


export default NavItem