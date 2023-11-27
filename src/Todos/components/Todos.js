import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "../store";

const Todos = () => {
    return (
        <div className="container">
            <Provider store={store}>
                <Outlet/>
            </Provider>
        </div>
    );
}
export default Todos;