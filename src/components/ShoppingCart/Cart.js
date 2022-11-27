import { useContext } from "react";
import AppContext from '../../Context/AppContext'

const Cart = () => {
    const {cartItems, removeCartItem} = useContext(AppContext);
    const cartItemTemplate = cartItems.map(item => {
        return (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>
                <button className="btn btn-warning btn-sm" onClick={() => {removeCartItem(item.id)}}>Remove</button>
            </td>
        </tr>
        );
    });
    return (
        <div className="mb-3">
            <strong>
            Total item in cart: {cartItems.length}
            </strong>
            <table className="table table-bordered border-primary table-sm" style={{maxWidth: '30%'}}>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        cartItems.length ? 
                        cartItemTemplate
                        :
                        <tr>
                            <td colSpan={"100%"} className="py-2"></td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Cart;