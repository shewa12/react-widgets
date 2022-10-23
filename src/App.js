
import './App.css';
import Accordion from './components/Accordion';
import Navigation from './components/Navigation';
import Route from './components/Route';
import Translate from './components/Translate/Translate';

function App() {

  return (
    <div className="container">
      <h2>React Widgets</h2>
      <div className='card mt-2'>
        <div className='card-header'>
          <Navigation />
        </div>
        <div className='card-body'>
          <Route path={'/'}>
            <Accordion />
          </Route>
          <Route path={'/translate'}>
            <Translate />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default App;
