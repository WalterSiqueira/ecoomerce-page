import React from 'react';
import {Img} from '../../Assets/styles/products-image-style';
import {ProductContainer} from '../../Assets/styles/products-block';
import {ProductIndividualContainer} from '../../Assets/styles/product-individual-block';
import echo from '../../Assets/images/amazon-dot.jpeg'; 
import robot from '../../Assets/images/cleaner-robot.jpeg';
import A3 from '../../Assets/images/galaxy-a3.jpeg';
import flip from '../../Assets/images/galaxy-flip.jpeg';
import headphones from '../../Assets/images/headphones.jpeg';
import iphonex from '../../Assets/images/iphone-x.png';
import logitechMouse from '../../Assets/images/logitech-gamer-mouse.jpeg';
import logitechKeyboard from '../../Assets/images/logitech-slim-keyboard.jpeg';
import playstation from '../../Assets/images/playstation-5.jpeg';

export function ProductsSection(props: any) {
  return (
    <ProductContainer>
      <ProductIndividualContainer>
        <Img src={echo}/>
      </ProductIndividualContainer>
      <ProductIndividualContainer>
        <Img src={robot}/>
      </ProductIndividualContainer>
      <ProductIndividualContainer>
        <Img src={A3}/>
      </ProductIndividualContainer>
      <ProductIndividualContainer>
        <Img src={flip}/>
      </ProductIndividualContainer>
      <ProductIndividualContainer>
        <Img src={headphones}/>
      </ProductIndividualContainer>
      <ProductIndividualContainer>
        <Img src={iphonex}/>
      </ProductIndividualContainer>
      <ProductIndividualContainer>
        <Img src={logitechMouse}/>
      </ProductIndividualContainer>
      <ProductIndividualContainer>
        <Img src={logitechKeyboard}/>
      </ProductIndividualContainer>
      <ProductIndividualContainer>
        <Img src={playstation}/>
      </ProductIndividualContainer>
    </ProductContainer>
  )
}
