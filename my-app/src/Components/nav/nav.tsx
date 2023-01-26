//import { useGlobalContext } from "../../Assets/Contexts/global-contexts";
import React from "react";
import {Nav} from '../../Assets/styles/nav-style';
import {LogoComponent} from './logo';
import {CartComponent} from "./cart";


export const NavComponent = (props: any) => {
    return (
        <Nav>
          <LogoComponent/>
          <CartComponent/>  
        </Nav>
    )
};