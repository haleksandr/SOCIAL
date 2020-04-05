import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Menu/>
                <div className="app-wrapper-content">
                    <Route path="/profile" component={Profile} />
                    <Route path="/dialogs" component={Dialogs} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;