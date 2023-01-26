import { useGlobalContext } from '../../Assets/Contexts/global-contexts';
import React from 'react';
import cartImg from '../../Assets/images/shopping-cart.png';
import { CartImageBlock } from "../../Assets/styles/cart-image-style";
import { CartContainerComponent } from '../../Assets/styles/cart-block-style';
import { CartItensQuantityComponent } from '../../Assets/styles/cart-quantity-style'; 

export function CartComponent(props: any) {
    const {itemsInCart} = useGlobalContext();
    return (
        <CartContainerComponent>
            <CartImageBlock src={cartImg}/>
            <CartItensQuantityComponent>{itemsInCart}</CartItensQuantityComponent>
        </CartContainerComponent>
    )
}