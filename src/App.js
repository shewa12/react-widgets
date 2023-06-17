
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accordion from './components/Accordion';
import Navigation from './components/Navigation';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Translate from './components/Translate/Translate';
import PlayList from './components/Playlist/PlayList';
import MultipleSlice from './car-management/CarManagement';
import CarManagement from './car-management/CarManagement';

function App() {

  return (
    <div className="container">
      <h2>React Widgets</h2>
      <BrowserRouter>
        <div className='card mt-2'>
          <div className='card-header'>
            <Navigation />
          </div>
          <div className='card-body'>
              <Routes>
                <Route path="/" element={<Accordion />} />
                <Route path="/translate" element={<Translate />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="/play-list" element={<PlayList />} />
                <Route path="/car-management" element={<CarManagement />} />
              </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
