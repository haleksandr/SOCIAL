import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Profile from './Components/Profile/Profile';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from './Components/Users/UsersContainer';
import Sitebar from './Components/Sitebar/Sitebar';


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Menu store={props.store} />
            <div className="app-wrapper-content">
                <Route path="/profile"
                       render={() => <Profile store={props.store} />}/>
                <Route path="/dialogs"
                       render={() => <DialogsContainer store={props.store} />}/>
                <Route path="/users" render={() => <UsersContainer store={props.store}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;