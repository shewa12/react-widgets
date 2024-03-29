
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Accordion from './components/Accordion';
import Navigation from './components/Navigation';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Translate from './components/Translate/Translate';
import PlayList from './components/Playlist/PlayList';
import CarManagement from './car-management/CarManagement';
import ReuseableTable from './components/ReuseableTable';
import Media from './media/Media';
import User from './media/components/User';
import UsersList from './media/components/UsersList';
import Todos from './Todos/components/Todos';
import List from './Todos/components/List';
import AddNew from './Todos/components/AddNew';

function App() {

  return (
    <div className="container">
      
      <BrowserRouter>
        <div className='offset-lg-1 col-lg-10'>
          <h2 className='py-2'>React Widgets</h2>
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
                  <Route path="/reuseable-table" element={<ReuseableTable />} />
                  <Route path="/media" element= { <Media />}>
                    <Route index element={ <UsersList /> } />
                    <Route path='users/:id' element= { <User /> } />
                  </Route>
                  <Route path="/todos" element={ 
                        <Todos />
                    }>
                      <Route index element={ <List />}></Route>
                      <Route path='add-new' element={ <AddNew />}></Route>
                  </Route>
                </Routes>
                
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
