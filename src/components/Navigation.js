import { Fragment } from "react";
import Link from "./Link";

const Navigation = () => {

    return (
        <Fragment>
            <Link href={ '/' } className={ 'btn btn-primary mx-3' }>
                Search
            </Link>
            <Link href={ '/translate' } className={ 'btn btn-secondary' }>
                Translate
            </Link>
        </Fragment>
    );
}
export default Navigation;