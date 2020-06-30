import React from 'react'
import { NavSt } from './styledComponents'
import { Link } from 'react-router-dom'

const Nav = () => {


    return (
        <ul>
            <NavSt>
                <Link to='/'>
                    Home
                </Link>
                <Link to='/profile'>
                    Profile
                </Link> 
            </NavSt>
                       
        </ul>
    )
}

export default Nav;