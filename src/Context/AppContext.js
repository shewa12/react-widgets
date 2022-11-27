import { createContext, useState } from "react";

const AppContext = createContext();

function Provider ({children}) {
    const [cartItems, setCartItems] = useState([]);

    const AppContextManage = {
        cartItems: cartItems,
        addCartItem: (item) => {
           setCartItems( cartItems => [...cartItems, item]);
        },
        removeCartItem: (itemId) => {
            const updateCart = cartItems.filter(item => {
                return item.id !== itemId
            });
            setCartItems(updateCart);
        }
    }
    return(
        <AppContext.Provider value={AppContextManage}>
        {children}
        </AppContext.Provider>
    );
}

export { Provider };
export default AppContext;