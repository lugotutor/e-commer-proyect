import React from 'react';
import "../App.css"
import { FaShoppingCart } from "react-icons/fa"; 


function CartWidget() {
  return (
    <div className='ShoppingCartStyle'>
        <FaShoppingCart className='cartStyle'/> 
        <div className='WidgetCartStyle'>5</div>
    </div>
  )
}

export default CartWidget;


