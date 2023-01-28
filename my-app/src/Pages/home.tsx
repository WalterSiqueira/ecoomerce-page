
import React ,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../Assets/Data/products-quantity/cartSlice';
import {Main} from '../Assets/styles/home-style';
import {NavComponent} from '../Components/nav/nav';
import {ProductsSection} from '../Components/products/products';
export function App() {
    const dispatch = useDispatch();
    return (
        <div>
                <NavComponent/>
                <Main>
                  <ProductsSection/>
                </Main>
        </div>
    )
};
