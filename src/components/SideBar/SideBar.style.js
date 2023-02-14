import styled from 'styled-components'
import SideBar from './SideBar'
import { NavLink } from 'react-router-dom'

export const StyledSideBar = styled(SideBar)`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    background-color: white;
    z-index: 2;
    padding: 30px;
    transition: width 0.5s ease;
    img {
        margin-bottom: 30px;
    }
`
export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`
export const SideLink = styled(NavLink)`
    text-decoration: none;
    margin-bottom: 15px;
    color: black;
    font-weight: 500;
    &:hover {
        margin-left: 10px;
    }
`