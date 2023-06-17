import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const CarSearch = () => {
    const dispatch = useDispatch();

    const searchTerm = useSelector(state => {
        return state.cars.searchTerm;
    });

    const handleSearchTerm = (e) => {
        dispatch(changeSearchTerm(e.target.value));
    }

    return (
        <div className="row mb-4">
            <div className="col">
                <div className="form-group">
                    <label htmlFor="car-search" className="form-label">Car Search</label>
                    <input className="form-control" id="car-search" value= { searchTerm } onChange={ handleSearchTerm }/>
                </div>
            </div>
        </div>
    );
}
export default CarSearch;