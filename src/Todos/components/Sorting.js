import { useState } from "react";
import { useDispatch } from "react-redux";

const Sorting = () => {
    const dispatch = useDispatch();

    const [selected, setSelected] = useState('All');

    const handleOptionChange = (e) => {
        setSelected(e.target.value);
        dispatch({ type: 'filters/statusFilterChanged', payload: e.target.value});
    }

    return(
        <select className="form-select" aria-label="Default select example" value={ selected } onChange={ handleOptionChange }>
            <option value="All">All</option>
            <option value="Complete">Complete</option>
            <option value="Incomplete">Incomplete</option>
        </select>
    );
}
export default Sorting;