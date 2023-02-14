import styled from 'styled-components'
import ShoppingCart from './ShoppingCart'

export const StyledShoppingCart = styled(ShoppingCart)`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 330px;
    height: 250px;
    background-color: white;
    border-radius: 5px;
    transform: translate(15px,-15px);
    box-shadow: 5px 5px 20px hsl(220, 14%, 75%);
    @media (max-width: 523px) {
        top: 0;
        left: 5vw;
        width: 90vw;
        height: 90vw;
        box-shadow: none;
        transform: translate(0, 15px);
        border-radius: 15px;
    }
    h4 {
        margin-left: 20px;
    }
    p {
        margin-top: 20px;
        margin-left: 20px;
        margin-bottom: 0px;
        font-size: 0.9rem;
    }
    b {
        color: black;
    }
    img {
        cursor: pointer;
    }
`
export const CartItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 20px;
`
export const ItemThumb = styled.img`
    width: 50px;
    height: 50px;
    margin: 20px 0px 10px 20px;
    border-radius: 5px;
`
export const DescrBox = styled.div`
    font-weight: 400;
    color: hsl(220, 14%, 60%);
    p {
        margin-left: 0;
    }
    @media (min-width: 329px) and (max-width: 523px) {
        padding:0 10px 0 10px;
        p{
            font-size: 1.2rem;
        }
    }
    @media (max-width: 328px) {
        padding:0 5px 0 5px;
        p{
            font-size: 1rem;
        }
    }
`
export const RemoveBtn = styled.img`
    height: 15px;
    margin-top: 32px;
    margin-left: 15px;
    @media (max-width: 523px) {
        height: 25px;
        width: 25px;
    }

`
export const CheckoutBtn = styled.button`
    width: 90%;
    margin-left: 5%;
    position: absolute;
    border: none;
    height: 45px;
    background-color: hsl(26, 100%, 55%);
    color: white;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
    left: 0;
    bottom: 15px;
`
