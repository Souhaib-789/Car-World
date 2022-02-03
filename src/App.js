import React, {useEffect} from 'react';
import './App.css';
import Routes from './Components/Screens/Routes';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from './Components/Screens/Home';
import Aos, { init } from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';
import Login from './Components/Login/Login';

function App() {

  useEffect(() => {
    {alert('Welcome to Car World')}
    Aos.init({duration: 2000});
  },[]);


  return (
    <>
    <Routes/>
    </>
  );
}

export default App;
