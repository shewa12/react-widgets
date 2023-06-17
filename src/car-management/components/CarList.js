import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
    const dispatch = useDispatch();

    // Remove car
    const handleRemoveCar = (id) => {
        dispatch(removeCar(id))
    }

    // Car list
    const {cars, currentName} = useSelector(({form,cars: {list, searchTerm}}) => {
        // Search filter show only search result
        const filtered =  list.filter(car =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return {cars: filtered, currentName: form.name}
    });

    // Total value of cars
    let totalValue = () => {
        let total = 0;
        cars.forEach(car => total += car.cost);
        return total;
    };

    const carsList = () => {
        
        if (cars.length) {
            return cars.map(car => {
                const bold = currentName && car.name.toLowerCase().includes(currentName.toLowerCase());
                return <tr key={car.id} className={bold && 'table-active'}>
                    <td>{ car.name }</td>
                    <td>${ car.cost }</td>
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={ () => { handleRemoveCar(car.id) } }>
                            Remove
                        </button>
                    </td>
                </tr>
            });
        } else {
            return <tr>
                <td colSpan={"100%"}>No record found</td>
            </tr>
        }
    }

    return (
        <div className="row mb-4">
            <div className="col">
                <h4>My Car List</h4>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { carsList() }
                        {
                            cars.length ?
                            <tr>
                                <td></td>
                                <td>
                                    <strong>
                                        Total Value: ${ totalValue() }
                                    </strong>
                                </td>
                                <td></td>
                            </tr>
                            :''
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default CarList;