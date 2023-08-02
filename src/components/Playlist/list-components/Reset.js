
import { useDispatch } from "react-redux";
import { reset } from "../../../redux-store";

const Reset = () => {
    const dispatch = useDispatch();

    const handleResetClick = () => {
        dispatch(reset());
    };

    return (
        <button onClick={() => handleResetClick()} className="btn btn-danger">
        Reset Both Playlists
      </button>
    );
}
export default Reset;