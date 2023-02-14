
import {ShoppingCartProvider} from './context/ShopingCartContext'
import { AppContainer } from './components/AppContainer.style'
import { GlobalStyles } from './GlobalStyles.style'
import { StyledNavBar } from './components/NavBar/NavBar.style'
import { StyledPageContainer } from './components/PageContainer.style'
import { Routes, Route, Outlet } from 'react-router-dom'
import { StyledCollections } from './pages/Collections.style'
import { Men } from './pages/Men'
import { Women } from './pages/Women'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { StyledShoppingCart } from './components/ShoppingCart/ShoppingCart.style'
import { useState } from 'react'
import { useEffect, useRef } from 'react'
import { StyledSideBar, Overlay } from './components/SideBar/SideBar.style'

 
function App() {
  const [isOpen, setIsOpen ] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  
  let anotherRef = useRef()
  useEffect(() => {
    let handler = (e) => {
      if (isOpen){
        if (!anotherRef.current.contains(e.target))
      {setIsOpen(false)
        console.log(e.target)
      }}
    }
    document.addEventListener("mousedown", handler)
    return() => {
      document.removeEventListener("mousedown", handler)
    }
  }, [isOpen])
  return (
    <ShoppingCartProvider>
      <GlobalStyles/>
      <AppContainer>

        <StyledNavBar setIsOpen={setIsOpen} isOpen={isOpen} setMenuOpen={setMenuOpen} />

        <StyledPageContainer>
          <Routes>
            <Route path="/" element={<StyledCollections setIsOpen={setIsOpen}/>} />
            <Route path="/men" element={<Men/>} />
            <Route path="/women" element={<Women/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Outlet />
          
          {isOpen && (
            <StyledShoppingCart anotherRef={anotherRef} setIsOpen={setIsOpen}/>
          )}
          {menuOpen && (
            <StyledSideBar setMenuOpen={setMenuOpen}/>
          )}
          {menuOpen && <Overlay />}
          
        
        </StyledPageContainer>

      </AppContainer>
    </ShoppingCartProvider>
  );
}

export default App;
