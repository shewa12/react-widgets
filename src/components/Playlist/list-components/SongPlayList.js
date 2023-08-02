import { createRandomSong } from "../data";
import { addSong, removeSong } from "../../../redux-store";
import { useDispatch, useSelector } from "react-redux";

function SongPlayList() {
  // To Do:
  // Get list of songs
  const songPlaylist = useSelector(state => state.songs );
  const dispatch = useDispatch();

  const handleSongAdd = (song) => {
    dispatch(addSong(song))
  };

  const handleSongRemove = (song) => {
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={`${song}-${new Date().getTime()}`}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="btn btn-warning"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="btn btn-success"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlayList;
