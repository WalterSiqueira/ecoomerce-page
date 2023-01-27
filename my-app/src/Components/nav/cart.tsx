import { useGlobalContext } from '../../Assets/Contexts/global-contexts';
import React from 'react';
import { RootState } from '../../Assets/Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import cartImg from '../../Assets/images/shopping-cart.png';
import { CartImageBlock } from "../../Assets/styles/cart-image-style";
import { CartContainerComponent } from '../../Assets/styles/cart-block-style';
import { CartItensQuantityComponent } from '../../Assets/styles/cart-quantity-style'; 

export function CartComponent(props: any) {
    const itemsInCart = useSelector((state: RootState) => state.quantity.productQuantity.value);
    return (
        <CartContainerComponent>
            <CartImageBlock src={cartImg}/>
            <CartItensQuantityComponent>{itemsInCart}</CartItensQuantityComponent>
        </CartContainerComponent>
    )
}