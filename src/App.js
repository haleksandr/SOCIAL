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
import Users from './Components/Users/Users';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Menu />
                <div className="app-wrapper-content">
                    <Route path="/profile" render={ () => <Profile post={props.post} /> } />
                    <Route path="/dialogs" render={ () => <Dialogs messages={props.messages} dialogs={props.dialogs} />  } />
                    <Route path="/users" render={ () => <Users /> } />
                    <Route path="/news" render={ () => <News /> } />
                    <Route path="/music" render={ () => <Music /> } />
                    <Route path="/settings" render={ () => <Settings /> } />
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;