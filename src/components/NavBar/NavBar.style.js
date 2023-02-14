import styled from "styled-components";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";

export const StyledNavBar = styled(NavBar)`
    margin: 0;
    width: 100%;
    height: 100px;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    border-bottom: 1px solid hsl(220, 14%, 90%);
    @media (max-width: 375px) {
        border-bottom: none;
        padding-top: 10px;
        max-height: 60px;
    }


    div:nth-child(1) {
        /* border: 1px solid black; */
        @media (max-width: 375px) {
            max-height: 50px;
        }

        h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-weight: 700;
        font-size: 30px;
        display: inline;
        margin-right: 20px;
        font-family: 'Kumbh Sans', sans-serif;
        }
        span {
            width: 80px;
            height: 5px;
            background-color: hsl(26, 100%, 55%);
            margin-right: 1px;
        }
        button {
            padding-top: 5px;
            padding-left: 5px;
            padding-right: 5px;
            margin: 10px;
            border: none;
            background-color: white;
            &:hover {
                background-color: hsl(223, 64%, 90%);
                border-radius: 3px;
            }
        }
    }
    div:nth-child(2) {
        display: flex;
    
        @media (max-width: 375px) {
            max-height: 60px;
        }
        button {
            display: inline;
            margin-top: 5px;
            height: 40px;
            border: none;
            background: none;
            &:hover {
                margin-top: 3px;
                cursor: pointer;
            }
        }

        img {
            margin-right: 30px;
            z-index:1;
            &:hover {
                cursor: pointer;
            }
            @media (max-width: 375px) {
                 max-width: 35px;
                 max-height: 35px;
            }
            @media (min-width: 376px) and (max-width: 422px) {
                margin-right: 10px;
            }
            
        }
    }

`
export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    margin-right: 10px;
    font-size: .9em;
    color: hsl(220, 14%, 75%);
    &:hover {
        color: hsl(220, 14%, 50%);
    }
`