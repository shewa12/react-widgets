import { Fragment } from "react";
import {Link} from "react-router-dom";

const Navigation = () => {

    return (
        <Fragment>
            <Link to="/" className={ 'btn btn-primary mx-3' }>
                Search
            </Link>
            <Link to="/translate" className={ 'btn btn-secondary  mx-3' }>
                Translate
            </Link>
            <Link to="/shopping-cart" className={ 'btn btn-success' }>
                Shopping Cart
            </Link>
        </Fragment>
    );
}
export default Navigation;