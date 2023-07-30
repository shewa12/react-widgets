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
            <Link to="/shopping-cart" className={ 'btn btn-success mx-3' }>
                Shopping Cart
            </Link>
            <Link to="/play-list" className={ 'btn btn-warning mx-3' }>
                Play List
            </Link>
            <Link to="/car-management" className={ 'btn btn-primary mx-3' }>
                Car Management
            </Link>
            <Link to="/reuseable-table" className={ 'btn btn-info mx-3' }>
                Reuseable Table
            </Link>
        </Fragment>
    );
}
export default Navigation;