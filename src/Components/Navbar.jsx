import React from 'react'
import { Link } from 'react-router-dom'
import style from './CSSFiles/Navbar.module.css'
import Icon from '../assets/typingSymbol.png'

import { IoHome } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { VscSettings } from "react-icons/vsc";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";


export default function Navbar() {
  return (
    <>
    <nav className={style.navbar}>
        <Link to='/'> <img src={Icon} className={style.icons} /> </Link>
        <div className={style.mainNavOption} >
          <Link to='/'><IoHome className={style.icons} /></Link>
          <Link to='/dashboard'><LuLayoutDashboard className={style.icons} /></Link>
          <Link to='/setting'><VscSettings className={style.icons} /></Link>
          <Link to='/feedback'><VscFeedback className={style.icons} /></Link>
          <Link to='/tips'><MdOutlineTipsAndUpdates className={style.icons} /></Link>
        </div>
        <Link to='/logIn'><IoIosLogIn className={style.icons} /></Link>
    </nav>
    </>
  )
}
