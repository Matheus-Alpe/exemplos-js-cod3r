import React from 'react'
import './NavItem.css'
import { Link } from 'react-router-dom'

const NavItem = props =>
    <Link to={props.pathAPI} className="menu-link" >
        <i className={`fa fa-${props.icon}`}></i> {props.label}
    </Link>


export default NavItem