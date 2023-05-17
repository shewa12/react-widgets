
import { useDispatch } from "react-redux";
import { reset } from "../../../redux-store";

const Reset = () => {
    const dispatch = useDispatch();

    const handleResetClick = () => {
        dispatch(reset());
    };

    return (
        <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
    );
}
export default Reset;