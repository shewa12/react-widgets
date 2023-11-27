import { useSelector } from "react-redux";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Sorting from "./Sorting";

const selectTodos = state => state.todos;

const selectFilter = state => state.filter.status;

const List = () => {

  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const data = useSelector(selectTodos);

  const handleToggle = (id) => {
    dispatch({ type: 'todos/toggled', payload: id });
  }

  const handleDelete = (id) => {
    dispatch({ type: 'todos/delete', payload: id });
  }

  const config = [
    {
      label: 'ID',
      render: item => item.id,
    },
    {
      label: 'Title',
      render: item => item.completed ? 
      <del>{ item.title }</del> : item.title
    },
    {
      label: 'Action',
      render: item => {
        return (
          <div className="d-flex gap-3">
            <button { ...item.id} className="btn btn-sm btn-success" onClick={ () => { handleToggle(item.id) } }>
              { item.completed ? 'Incomplete' : 'Complete' }
            </button>
            <button { ...item.id} className="btn btn-sm btn-danger" onClick={ () => { handleDelete(item.id) } }>
              Delete
            </button>
          </div>
        );
      },
    }
  ];

  const keyFn = item => item.id;

  return (
    <>
      {console.log(filter)}
      <h3>Todos</h3>

      
      <div className="row">
        <div className="col">
          <Link to="/todos/add-new" className="btn btn-sm btn-primary mb-1">
            <i className="bi bi-plus-circle"></i> Add New
          </Link>
        </div>
        <div className="col mb-1"></div>
        <div className="col mb-1">
          <Sorting/>
        </div>
      </div>

      <Table 
      data={ 
        filter === 'All' ? data : 
        filter === 'Complete' ? 
        data.filter(item => item.completed ) :
        data.filter(item => !item.completed)
      } 
      config={ config }
      keyFn={ keyFn }/>
    </>
  );
}
export default List;