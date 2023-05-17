import MoviePlayList from "./list-components/MoviePlayList";
import SongPlayList from "./list-components/SongPlayList";
import "./style.css";
import { store } from "../../redux-store/index";
import { Provider } from "react-redux";
import Reset from "./list-components/Reset";

export default function PlayList() {


  return (
    <Provider store={store}>
      <div className="container is-fluid">
        <Reset />
        <hr />
        <MoviePlayList />
        <hr />
        <SongPlayList />
      </div>
    </Provider>
  );
}
