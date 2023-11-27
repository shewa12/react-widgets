import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const AddNew = () => {
    const dispatch = useDispatch();

    const [todoItem, setTodoItem] = useState({
        title: '',
        completed: false
    });

    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodoItem(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        dispatch({ type: 'todos/added', payload: todoItem });

        alert('Item added!');
        form.current.reset();
    }

    return(
        <div>
            <h3>Add New Todo</h3>
            <form ref={ form } onSubmit={ handleFormSubmit }>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input id="title" name="title" className="form-control" onChange={ handleChange }/>
                </div>
                <div className="mb-3 d-flex gap-3">
                    <Link className="btn btn-secondary" to={"/todos"}>Cancel</Link>
                    <button className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
export default AddNew;