import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";
import { Provider } from "react-redux";
import {store} from './store/index';

const CarManagement = () => {
    return (
        <div>
            <p className="my-3 text-primary">Car Management with Redux Toolkit</p>
            <Provider store={store}>
                <CarForm />
                <CarSearch />
                <CarList />
            </Provider>
        </div>
    );
}
export default CarManagement;