import React from 'react';
import './App.css';
import Header from './Componets/Header/Header';
import Navbar from './Componets/Navbar/Navbar';
import Profile from './Componets/Profile/Profile.jsx';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />

    </div>

  );
}


export default App;