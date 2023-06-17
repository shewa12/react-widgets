import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from '../store';

const CarForm = () => {
    const dispatch = useDispatch();

    // Getting states from form slice
    const {name, cost} = useSelector(state => {
        return {
            name: state.form.name,
            cost: state.form.cost,
        }
    });

    // Dispatching reducers to update states
    const updateName = (e) => {
        dispatch(changeName(e.target.value));
    }

    const updateCost = (e) => {
        dispatch(changeCost(Number(e.target.value) || 0))
    }

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
       
        dispatch(addCar({name, cost}));
    }

    return (
    <div className="row align-items-end mb-4">
        <div className="col">
            <label htmlFor="car-name" className="form-label">
                Car Name
            </label>
            <input className="form-control" id="car-name" value={name} onChange={ updateName } />
        </div>
        <div className="col">
            <label htmlFor="car-value" className="form-label">
                Car Value
            </label>
            <input type="number" className="form-control" id="car-value" value={ cost || '' } onChange={ updateCost } />
        </div>
        <div className="col">
            <button className="btn btn-primary" onClick={ handleSubmit }>Submit</button>
        </div>
    </div>
    );
}
export default CarForm;