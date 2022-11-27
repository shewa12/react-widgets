import { Fragment } from "react";
import Link from "./Link";

const Navigation = () => {

    return (
        <Fragment>
            <Link href={ '/' } className={ 'btn btn-primary mx-3' }>
                Search
            </Link>
            <Link href={ '/translate' } className={ 'btn btn-secondary  mx-3' }>
                Translate
            </Link>
            <Link href={ '/shopping-cart' } className={ 'btn btn-success' }>
                Shopping Cart
            </Link>
        </Fragment>
    );
}
export default Navigation;