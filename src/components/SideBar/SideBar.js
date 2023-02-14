import React from 'react'
import closeBtn from '../../images/icon-close.svg'
import { SideLink } from './SideBar.style'

function SideBar({className, setMenuOpen}) {
  return (
    <div className={className}>
      <img src={closeBtn} alt="" width="15px" onClick={() => setMenuOpen(false)}/>
      <SideLink onClick={() => setMenuOpen(false)} to="/">Collections</SideLink>
      <SideLink onClick={() => setMenuOpen(false)} to="/men">Men</SideLink>
      <SideLink onClick={() => setMenuOpen(false)} to="/women">Women</SideLink>
      <SideLink onClick={() => setMenuOpen(false)} to="/about">About</SideLink>
      <SideLink onClick={() => setMenuOpen(false)} to="/contact">Contact</SideLink>
    </div>
  )
}

export default SideBar
