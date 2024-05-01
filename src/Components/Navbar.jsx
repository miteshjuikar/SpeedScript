import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './CSSFiles/Navbar.module.css'
import Icon from '../assets/typingSymbol.png'

import { IoHome } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { VscSettings } from "react-icons/vsc";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";


export default function Navbar() {

  const activeStyle = {
    fontWeight: "bold",
    backgroundColor: "rgb(36, 39, 57)"
  }

  return (
    <>
    <nav className={style.navbar}>
        <Link to='/'> <img src={Icon} className={style.icons} /> </Link>
        <div className={style.mainNavOption} >
          <NavLink to='/' style={({isActive}) => isActive ? activeStyle : null} ><IoHome className={style.icons} /></NavLink>
          <NavLink to='/dashboard' style={({isActive}) => isActive ? activeStyle : null} ><LuLayoutDashboard className={style.icons} /></NavLink>

          <NavLink to='/setting' style={({isActive}) => isActive ? activeStyle : null}><VscSettings className={style.icons} /></NavLink>
          <NavLink to='/feedback' style={({isActive}) => isActive ? activeStyle : null}><VscFeedback className={style.icons} /></NavLink>
          <NavLink to='/tips' style={({isActive}) => isActive ? activeStyle : null}><MdOutlineTipsAndUpdates className={style.icons} /></NavLink>
        </div>
        <NavLink to='/logIn' style={({isActive}) => isActive ? activeStyle : null}><IoIosLogIn className={style.icons} /></NavLink>
    </nav>
    </>
  )
}
