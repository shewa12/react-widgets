import { Fragment } from "react";
import Cart from "./Cart";
import Products from "./Products";
import { Provider } from '../../Context/AppContext';

const ShoppingCart = () => {
    const products = [
        {id: 1, title: "product 1"},
        {id: 2, title: "product 2"},
        {id: 3, title: "product 3"},
    ];
    return (
        <Fragment>
            <p className="my-3 text-primary">
                Shopping Cart with Context API
            </p>
            <Provider>
                <Cart />
                <Products products={products}/>
            </Provider>
        </Fragment>
    );
}
export default ShoppingCart;