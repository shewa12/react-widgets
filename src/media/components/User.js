import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../store/apis/AppApi';
import Spinner from './Spinner';

// Single user page component
const User = () => {
    const userId = useParams().id;

    // RTK Query hook to fetch user
    const {data, isSuccess, isError, error} = useGetUserQuery(userId);
    let user = data;
    return (
        isSuccess ?  
        
        <div className="user-profile">
            <h2>{ user.name }</h2>
            <div className="albums">
                
            </div>
        </div>
        : 
        <Spinner />
    )
}
export default User;