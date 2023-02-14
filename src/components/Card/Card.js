import plusSign from '../../images/icon-plus.svg'
import minusSign from '../../images/icon-minus.svg'
import cartSign from '../../images/icon-cart-copy.svg'
import { useShoppingCart } from '../../context/ShopingCartContext'
import { AddToCartBtn, ControlPanel, BtnsContainer, Discount, PrevPrice, Price, Tag, Description, AuxFormater } from './Card.style'



const Card = ({ className, setIsOpen }) => {


    const {multiplier, setMultiplier, increment, decrement, addToCart} = useShoppingCart()

    return(
        <div className={className}>
            <Tag>Sneaker Company</Tag>
            <h1>Fall Limited Edition Sneakers</h1>
       
            <Description>
                These low-profile sneakers are your perfect casual wear companion. Featuring 
                a durable rubber outer sole, they'll withstand everything the weather can offer
            </Description>
            <AuxFormater>
                <span>
                    <Price>$125.00</Price>
                    <Discount>50%</Discount>
                </span>
                <PrevPrice>$250</PrevPrice>
            </AuxFormater>
            <BtnsContainer>
                <ControlPanel>
                    <button onClick={() => decrement()}> <img src={minusSign} alt="minus sign" /> </button>
                    <div>{multiplier}</div>
                    <button onClick={() => increment()}><img src={plusSign} alt='plus sign' /></button>
                </ControlPanel>
                
                <AddToCartBtn
                    onClick={() => {
                        addToCart()
                        setIsOpen(true)
                        setMultiplier(1)
                    }}
                >
                    <img src={cartSign} alt="cart sign" style={{ marginRight: '10px' }} /> Add to cart
                </AddToCartBtn>
            
            </BtnsContainer>

        </div>
    )
}

export default Card;