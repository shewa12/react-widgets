import UsersList from "./components/UsersList";
import { Provider } from "react-redux";
import { store } from "./store";

const Media = () => {
    return (
        <Provider store={ store }>
            <div className="media">
                <UsersList />
            </div>
        </Provider>
    );
}
export default Media;