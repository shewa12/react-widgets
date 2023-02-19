import MoviePlayList from "./list-components/MoviePlayList";
import SongPlayList from "./list-components/SongPlayList";
import "./style.css";
import "../../redux-store/index";

export default function PlayList() {
  const handleResetClick = () => {
    //
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlayList />
      <hr />
      <SongPlayList />
    </div>
  );
}
