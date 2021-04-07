import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' />
      </Switch>
    </div>
  );
}

export default App;
