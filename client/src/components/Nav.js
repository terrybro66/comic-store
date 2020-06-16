import React from 'react'
import { NavSt } from './styledComponents'
import { Link } from 'react-router-dom'


const Nav = () => {


    return (
        <ul>
            <NavSt>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/profile'>
                    <li>Profile</li>
                </Link> 
            </NavSt>
                       
        </ul>
    )
}

export default Nav;