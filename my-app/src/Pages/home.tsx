import { globalContext } from '../Assets/Contexts/global-contexts';
import React ,{useState} from 'react';
import {Main} from '../Assets/styles/home-style';
import {NavComponent} from '../Components/nav/nav';
function App() {
    const [itemsInCart, setItemsInCart] = useState<number>(0);
    return (
        <div>
            <globalContext.Provider value={{itemsInCart, setItemsInCart}}>
                <NavComponent/>
                <Main>
                
                </Main>
            </globalContext.Provider>
        </div>
    )
}
export default App;