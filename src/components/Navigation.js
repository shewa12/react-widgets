import { Fragment } from "react";
import {Link} from "react-router-dom";

const Navigation = () => {

    return (
        <Fragment>
            <Link to="/" className={ 'btn btn-primary mx-2' }>
                Search
            </Link>
            <Link to="/translate" className={ 'btn btn-secondary  mx-2' }>
                Translate
            </Link>
            <Link to="/shopping-cart" className={ 'btn btn-success mx-2' }>
                Shopping Cart
            </Link>
            <Link to="/play-list" className={ 'btn btn-warning mx-2' }>
                Play List
            </Link>
            <Link to="/car-management" className={ 'btn btn-primary mx-2' }>
                Car Management
            </Link>
            <Link to="/reuseable-table" className={ 'btn btn-info mx-2' }>
                Reuseable Table
            </Link>
            <Link to="/media" className={ 'btn btn-danger mx-2' }>
                Media
            </Link>
            <Link to="/todos" className={ 'btn btn-secondary mx-2' }>
                Todos
            </Link>
        </Fragment>
    );
}
export default Navigation;