import React from 'react'
import { StyledNavLink } from './NavBar.style'
import CartIcon from '../../images/icon-cart.svg'
import Avatar from '../../images/image-avatar.png'
import MenuIcon from '../../images/icon-menu.svg'
import { useShoppingCart } from '../../context/ShopingCartContext'
import { NavLink } from 'react-router-dom'

const NavBar = ({className, setIsOpen, isOpen, setMenuOpen}) => {
   let screenWidth = window.innerWidth
   
   const {quantity} = useShoppingCart()
         
  return (
    <div className={className}>

      <div style={{position: 'relative'}}>
        
            {screenWidth <= 703 && (
                <button>
                    <img src={MenuIcon} alt="menu-icon" onClick={() => setMenuOpen(true)}/>
                </button>
            )}    
            
            <h1><NavLink to="/" style={{textDecoration: 'none', color: 'black'}}>sneakers</NavLink></h1>
            
            {screenWidth > 703 && (<div 
                style={{
                    
                    display: 'inline'
                }} 
                
            >
            <StyledNavLink onMouseEnter={()=>{
                let bar = document.getElementById('under1')
                bar.style.background = 'hsl(26, 100%, 55%)'
            }} onMouseLeave={() => {
                let bar = document.getElementById('under1')
                bar.style.background = 'none'
            }} to="/">Collections</StyledNavLink>
            <StyledNavLink onMouseEnter={()=>{
                let bar = document.getElementById('under2')
                bar.style.background = 'hsl(26, 100%, 55%)'
            }} onMouseLeave={() => {
                let bar = document.getElementById('under2')
                bar.style.background = 'none'
            }} to="/men">Men</StyledNavLink>
            <StyledNavLink onMouseEnter={()=>{
                let bar = document.getElementById('under3')
                bar.style.background = 'hsl(26, 100%, 55%)'
            }} onMouseLeave={() => {
                let bar = document.getElementById('under3')
                bar.style.background = 'none'
            }} to="/women">Women</StyledNavLink>
            <StyledNavLink onMouseEnter={()=>{
                let bar = document.getElementById('under4')
                bar.style.background = 'hsl(26, 100%, 55%)'
            }} onMouseLeave={() => {
                let bar = document.getElementById('under4')
                bar.style.background = 'none'
            }} to="/about">About</StyledNavLink>
            <StyledNavLink onMouseEnter={()=>{
                let bar = document.getElementById('under5')
                bar.style.background = 'hsl(26, 100%, 55%)'
            }} onMouseLeave={() => {
                let bar = document.getElementById('under5')
                bar.style.background = 'none'
            }} to="/contact">Contact</StyledNavLink>
            </div>)}

        {screenWidth > 703 && (<div style={{position: 'absolute', display: 'flex', left: '145px', bottom: '-1px'}}>
                <span id='under1' style={{width: '79px', background: 'none'}}/>
                <span id='under2' style={{width: '40px', background: 'none'}} />
                <span id='under3' style={{width: '62px', background: 'none'}} />
                <span id='under4' style={{width: '49px', background: 'none'}} />
                <span id='under5' style={{width: '63px', background: 'none'}} />
        </div>)}
        
      </div>

      <div style={{position: 'relative'}}>
              <button
                  onClick={() => {
                    setIsOpen(!isOpen)
                  }}
              >
                  <img src={CartIcon} alt="cart icon"

                  />
                
              </button>
              <div>
                  <img src={Avatar} alt="avatar" 
                  onClick={() => alert("Hi I'm Bob!")}
                  onMouseEnter={() => {
                    let circle = document.getElementById('bg-circle')
                    circle.style.display = 'block'
                  }} 
                  onMouseLeave={() => {
                    let circle = document.getElementById('bg-circle')
                    circle.style.display = 'none'
                  }} width='50px' height='50px' />
                  <div style={{
                    position: 'absolute', 
                    bottom: "32px", 
                    left: '20px', 
                    borderRadius: '50%', 
                    color: 'white', 
                    backgroundColor: 'hsl(26, 100%, 55%)', 
                    width: '20px', justifyContent: 'center', 
                    zIndex: '3',
                }}
                  >{quantity}</div>
                  <div id='bg-circle' style={{position: 'absolute', transform: 'translate(-5%, -5%)', backgroundColor: 'hsl(26, 100%, 55%)', width: '56px', height: '56px', borderRadius: '50%', display: 'none'}}/>
              </div>
      </div>
     
    </div>
  )
}

export default NavBar
