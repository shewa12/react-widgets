
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accordion from './components/Accordion';
import Navigation from './components/Navigation';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Translate from './components/Translate/Translate';

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
              </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
