import {createContext, useContext, useState} from 'react';
export type GlobalContent = {
    itemsInCart: number,
    setItemsInCart: (i: number) => void
};
export const globalContext = createContext<GlobalContent>({
    itemsInCart: 0,
    setItemsInCart: () => {},
});

export const useGlobalContext = () => useContext(globalContext);