//import { globalContext } from '../Assets/Contexts/global-contexts';
import React ,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../Assets/Redux/products-quantity/cartSlice';
import {Main} from '../Assets/styles/home-style';
import {NavComponent} from '../Components/nav/nav';
export function App() {
    const dispatch = useDispatch();
    return (
        <div>
                <NavComponent/>
                <Main>
                    <button onClick={() => dispatch(incrementQuantity())}>add iten</button>
                    <button onClick={() => dispatch(decrementQuantity())}>remove iten</button>
                </Main>
        </div>
    )
};