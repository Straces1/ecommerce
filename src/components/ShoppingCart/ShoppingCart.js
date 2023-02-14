import React from 'react'
import pic1 from '../../images/image-product-1-thumbnail.jpg'
import removeBtn from '../../images/icon-delete.svg'
import { useShoppingCart } from "../../context/ShopingCartContext"
import {CheckoutBtn, CartItem, ItemThumb, DescrBox, RemoveBtn} from './ShoppingCart.style'

function ShoppingCart({className, anotherRef, setIsOpen}) {

  const {clearCart, quantity, getTotal } = useShoppingCart()
  
  return (
    <div id='shop-cart' className={className} ref={anotherRef}>
        <h4>Cart</h4>
    
        <div style={{width: '100%', height: '1px', background: 'hsl(220, 14%, 90%)'}}></div>

        {
          quantity === null
          ? <h4 style={{color: 'hsl(220, 14%, 60%)', marginLeft: '28%', marginTop: "25%"}}>Your cart is empty</h4>
          : (
          <CartItem>
          <ItemThumb src={pic1} alt="product thumbnail" 
        />
      
          <DescrBox>
            <p>Fall Limited Edition Sneakers</p>
            <div style={{display: 'flex' }}>
              <p>$125.00 x {quantity}</p>
              <p style={{marginLeft: '15px'}}><b>${getTotal()}</b></p>
            </div>
          </DescrBox>

          <RemoveBtn src={removeBtn} alt="remove button" onClick={() => clearCart()}
          />
        </CartItem>
        )
        }

        { quantity >= 1 && (
        <CheckoutBtn
          onClick={() => {
            setIsOpen(false)
            alert('Get your credit card ready!')
          }}
        >
          Checkout
        </CheckoutBtn>
        )}
    </div>
    
  )
}

export default ShoppingCart
