import UsersList from "./components/UsersList";
import { Provider } from "react-redux";
import { store } from "./store";
import { Outlet } from "react-router-dom";

const Media = () => {
    return (
        <Provider store={ store }>
            <div className="media">
                <Outlet />  
            </div>
        </Provider>
    );
}
export default Media;