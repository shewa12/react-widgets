import { useParams } from 'react-router-dom';

// Single user page component
const User = () => {
    const userId = useParams().id;
    return (
        <div className="user-profile">
            <h2>Name</h2>
            <div className="albums">

            </div>
        </div>
    )
}
export default User;