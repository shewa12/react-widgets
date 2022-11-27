import { useContext } from "react";
import AppContext from '../../Context/AppContext'

const Products = ({products}) => {
    const {cartItems, addCartItem} = useContext(AppContext);

    const productsTemplate = products.map((product) => {
        let productAddedInCart = false;
        cartItems.forEach(element => {
           if (element.id === product.id) {
            productAddedInCart = true;
           }
        });
        
        return (
            <div className="product col" key={product.id} style={{border: '1px solid #e3e3e3', padding: '20px'}}>
                <strong>
                    ID: {product.id} {product.title}
                </strong>
                <br/>
               
            {
                productAddedInCart ?
                <p className="text-success fst-italic">View Cart</p>
                :
                <button className="btn btn-primary btn-sm mt-2" onClick={(e) => {
                    e.preventDefault();
                    addCartItem({id: product.id, title: product.title})
                    }}>
                        Add to Cart
                </button>
            }
            </div>
        );
    });
    return (
        <div className="products row" style={{display: "flex", gap: '20px'}}>
            {productsTemplate}
        </div>
    );
}

export default Products;