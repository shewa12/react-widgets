import { Fragment } from 'react';
import { faker } from '@faker-js/faker';
import { useAddNewUserMutation, useGetUsersQuery, useDeleteUserMutation } from '../store/apis/AppApi';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import Albums from './Albums';

const UsersList = () => {
    // Destructure fields from hook
    const {data, isSuccess, isError, error, isLoading } = useGetUsersQuery();

    let users = data;
    if (users) {
        users = [...users].sort((a,b) => b.id - a.id);
    }

    const [deleteUser, {isDeleting}] = useDeleteUserMutation();

    const userRows = users && users.map(user => {
        return (
            <tr key={ user.id }>
                <td>{ user.id }</td>
                <td><img src={user.avatar} alt={ user.name } width={ "80px" }/></td>
                <td width={'80%'}>
                    <Link to={`users/${user.id}`} >{ user.name }</Link>
                    <div>
                        <Albums />
                    </div>
                </td>
                <td>
                    <button className='btn btn-danger btn-sm' onClick={ async () => {
                        if (!isDeleting) {
                            await deleteUser(user.id)
                        }
                    }}>Remove</button>
                </td>
            </tr>
        );
    });
    

    let content; 
        if (isLoading) {
            content = <Spinner />;
        } else if (isSuccess) {
            content = <table className={`table table-bordered`}>
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

        // Handle add new user
        const [ addNewUser, { isProcessingAddUser } ] = useAddNewUserMutation();
        const handleAddUserEvent = async () => {
            
            if (isProcessingAddUser) {
                return;
            }

            // Add user logic
            try {
                let userId = Math.floor((Math.random() * 100) + 1);
                const userData = {
                    // ceil random number
                    id: userId,
                    name: faker.internet.userName(),
                    avatar: faker.internet.avatar(),
                }
                await addNewUser(userData); 
            } catch (error) {
                console.log('Failed to new add user', error);
            }
        };
    
        return (
            <Fragment>
                <button className='btn btn-sm btn-primary mb-2' onClick={ handleAddUserEvent }>
                    <i className="bi bi-plus-circle"></i>
                </button>
                { content }
            </Fragment>
        );
}
export default UsersList;