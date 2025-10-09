import './navbar.css'
import './menu_expanded.css'
import React from 'react'
import { CgMenuGridO } from 'react-icons/cg'
import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TfiPlus } from 'react-icons/tfi'

const Navbar: React.FC = () => {

  const [menuState, setMenuState] = useState(false)
  const [openedOnce, setOpenedOnce] = useState(false);
  const [phoneView, setPhoneView] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [navbar, setNavbar] = useState('Navbar');

// a

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY)
      if (window.scrollY - scrollY < 0) {
        setNavbar('Navbar')
      } else {
        setNavbar('Navbar_hidden')
      }
    })
  })

  const sidebar_status = useMemo(() => {
    if (openedOnce) {
      if (phoneView) {
        return menuState ? 'menu_expanded_2' : 'menu_closed_3'
      } else {
        return menuState ? 'menu_expanded' : 'menu_closed_2'
      }
    } else {
      if (phoneView) {
        return menuState ? 'menu_expanded_2' : 'menu_closed_3'
      } else {
        return menuState ? 'menu_expanded' : 'menu_closed'
      }
    }
  }, [menuState, phoneView]);

  useEffect(() => {
    if (screen.width < 850) {
      setPhoneView(true)
    } else {
      setPhoneView(false)
    }
  }, [screen.width])

  return (
      <div className='menu_navbar'>
        <div className={ navbar } id='menu_navbar'>
          <div className='logo_container'>
          <Link to="/">  <img className='logo_image' src="../../../favicon_black.png"/> </Link>
          </div>
          <div className='rso_title_container'>
          <Link to="/"><h1>ILLINI ROBOSUB</h1> </Link>
          </div>
          <div className='menu'>
            <button className='menu_button' onClick={() => {
              setMenuState(true);
              setOpenedOnce(true);
            }}>MENU<CgMenuGridO className='menu_icon'/></button>
          </div>
        </div>
        <div className={ sidebar_status } id='menu_sidebar'>
          <div className='exit_sidebar'>
            <TfiPlus className='sidebar_exit_button' onClick={() => { setMenuState(false) }}/>
          </div>
          <div className='main_sidebar'>
            <div className='social_sidebar'>

            </div>
            <div className='menu_option'>
              <h4>Menu</h4>
              <Link className='menu_option_val' to='/'><h3>01</h3><h2>HOME</h2></Link>
              <Link className='menu_option_val' to='/robots'><h3>02</h3><h2>ROBOTS</h2></Link>
              <Link className='menu_option_val' to='/sponsors'><h3>03</h3><h2>SPONSORS</h2></Link>
              <Link className='menu_option_val' to='/members'><h3>04</h3><h2>MEMBERS</h2></Link>
              <Link className='menu_option_val' to='/docs'><h3>05</h3><h2>DOCS</h2></Link>
              <Link className='menu_option_val' to='/contact'><h3>06</h3><h2>CONTACT</h2></Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Navbar