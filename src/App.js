import './App.css';
// import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/header/header.jsx';
import Profile from './components/Profile/Profile';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact'
import React, {useState, useEffect} from 'react'


function App() {
  const [wheelScroll, onWheelScroll] = useState(0);
  const [touchPageY, onTouchPageY] = useState(0);

  useEffect(() => {
    document.addEventListener('keydown', handlekeyPress);
    return () => document.removeEventListener("keydown", handlekeyPress);
  }, [])

  const handleWheelChange = (e) => {
    let {deltaY} = e;
    let value = window.innerHeight
    onWheelScroll(previousWheel => {
      if (previousWheel === 0 && deltaY < 0) {
        return 0;
      }
      if (previousWheel === window.innerHeight*2 && deltaY > 0) {
        return previousWheel;
      }
      if (previousWheel < 0) {
        return 0;
      };
      if (previousWheel > window.innerHeight*2) {
        return window.innerHeight*2;
      };
      let change = previousWheel + deltaY;
      if ((change > value && previousWheel < value) || (change < value && previousWheel > value)) {
        return value;
      }
      return change;
    });
  }

  const handlekeyPress = (e) => {
    let {keyCode: key} = e;
    let ey = {
      deltaY: 0
    };
    if (key === 38) {
      ey = {
        deltaY: -(window.innerHeight/10)
      }
      handleWheelChange(ey)
    }
    if (key === 40) {
      ey = {
        deltaY: window.innerHeight/10
      }
    }
    handleWheelChange(ey)
  }

  return (
    <div className="App" onWheel={handleWheelChange} onTouchEnd ={(e) => {
      let deltaY = (touchPageY - e.changedTouches[0].pageY) * 2;
      handleWheelChange({deltaY})
    }} onTouchStart = {e => onTouchPageY(e.changedTouches[0].pageY)} style = {{
      touchAction: wheelScroll !== 0 ? "none":"pan-y"
    }}>
      <Header onWheelScroll={onWheelScroll} wheelScroll = {wheelScroll}/>
      <Profile wheelScroll={wheelScroll}/>
      <Work wheelScroll={wheelScroll}/>
      <Contact wheelScroll={wheelScroll}/>
    </div>
  );
}

export default App;
