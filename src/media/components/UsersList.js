import { Fragment } from 'react';
import { useGetUsersQuery } from '../store/apis/AppApi';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

const UsersList = () => {
    // Destructure fields from hook
    const {data, isSuccess, isError, error, isLoading } = useGetUsersQuery();

    let users = data;

    const userRows = users && users.map(user => {
        return (
            <tr key={ user.id }>
                <td>{ user.id }</td>
                <td>
                    <Link to={`users/${user.id}`} >{ user.name }</Link>
                    
                </td>
                <td>
                    <button className='btn btn-danger btn-sm'>Remove</button>
                </td>
            </tr>
        );
    });
    
    let content; 
        if (isLoading) {
            content = <Spinner />;
        } else if (isSuccess) {
            content = <table className='table table-bordered table-hover'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { userRows }
            </tbody>
        </table>
        } else if (isError) {
            content = <div>Error: {error.error}</div> 
        }
    
        return (
            <Fragment>
                { content }
            </Fragment>
        );
}
export default UsersList;