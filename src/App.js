import React from 'react';
import './App.css';
import Header from './Componets/Header/Header';
import Navbar from './Componets/Navbar/Navbar';
import Profile from './Componets/Profile/Profile.jsx';
import Dialogs from "./Componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import News from "./Componets/News/News";
import Settings from "./Componets/Settings/settings";
import Music from "./Componets/Music/Music";


const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div class='app-wrapper-content'>
                <Route path='/dialogs' component={Dialogs} />
                <Route path='/profile' component={Profile}/>
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
            </div>



        </div>
        </BrowserRouter>
    );
}


export default App;