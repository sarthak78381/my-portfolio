import './App.css';
// import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/header/header.jsx';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
    </div>
  );
}

export default App;
