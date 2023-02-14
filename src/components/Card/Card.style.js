import styled from "styled-components";
import Card from './Card'

export const StyledCard = styled(Card)`
    height: 100%;
    margin-top: 7vh;
    margin-right: 7vh;
    @media (max-width: 523px) {
        margin-right: 0;
    }

    h1 {
        font-size: 32px;
    }
    @media (min-width: 524px) and (max-width: 598px) {
        h1 {
            font-size: 28px;
            margin-top: 0;
            margin-bottom: 0;
        }
    }
    @media (max-width: 523px) {
        padding-left: 30px;
        padding-right: 30px;
        margin-top: 0;
    }
`
export const Description = styled.p`
    color: hsl(220, 14%, 60%);
    @media (max-width: 523px) {
        font-size: 1.2rem;
        line-height: 24pt;
    }
`

export const AddToCartBtn = styled.button`
    cursor: pointer;
    border: none;
    min-width: 140px;
    height: 45px;
    border-radius: 8px;
    background-color: hsl(26, 100%, 55%);
    color: white;
    font-size: .9rem;
    font-weight: 600;
    padding: 0 40px 0 40px;
    @media (min-width: 831px) and (max-width: 929px) {
        padding: 0 20px 0 20px;
    }
    @media (min-width: 524px) and (max-width: 830px) {
        padding: 0 10px 0 10px;
    }
    @media (max-width: 523px) {
        width: 100%;
        height: 60px;
        font-size: 1.3rem;
    }

`

export const ControlPanel = styled.div`
    display: flex;
    margin-right: 10px;
    margin-bottom: 15px;
    background-color: rgb(247,248,253);
    border-radius: 5px;
    height: 45px;
    width: 140px;
    padding: 0 10px 0 10px;
    font-weight: 600;
    button {
        cursor: pointer;
        border: none;
        background-color: rgb(247,248,253);
        padding-top: 0;
    }
    img {
        margin-top: 0;
    }
    div{
        background-color: rgb(247,248,253);
        margin: auto;
    }
    @media (max-width: 523px) {
        width: 100%;
        height: 60px;
        margin-top: 20px;
    }
    
`

export const BtnsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: stretch;
    @media (max-width: 766px) {
        display: block;
 
    }

`
export const Tag = styled.p`
    margin-top: 0;
    color: rgb(227,161,95);
    font-size: .7rem;
    font-weight: 600;
    text-transform: uppercase;
    @media (max-width: 523px) {
        font-size: .9rem;
    }

`

export const Discount = styled.span`
    margin-left: 2vw;
    color: rgb(227,161,95);
    padding: 2px 4px 2px 4px;
    font-size: .8rem;
    font-weight: 700;
    background-color: rgb(250,240,226);
    border-radius: 3px;
    position: absolute;
    transform: translateY(5px);
    @media (max-width: 523px) {
        display: inline;
        font-size: 1.4rem;
        padding: 4px 5px 4px 5px;
        margin-left: 20px
    }

`

export const Price = styled.h2`
    display: inline;
    font-size: 24px;
    margin-bottom: 0px;
    @media (max-width: 523px) {
        font-size: 2.1rem;
    }
`

export const PrevPrice = styled.p`
    margin-top: 5px;
    font-size: .9rem;
    font-weight: 600;
    color: hsl(220, 14%, 60%);
    text-decoration: line-through;
    @media (max-width: 523px) {
        font-size: 1.3rem;
    }
`

export const AuxFormater = styled.div`
    display: block;
    @media (max-width: 523px) {
        display: flex;
        justify-content: space-between;
        
    }
`
