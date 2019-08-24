import React, {Component} from 'react';
import TopNavBar from "./TopNavBar";
//import logo from '../logo.svg';
//import '../styles/App.css';
//import { TopBar } from './TopBar';
import {Main} from './Main';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopNavBar />
                <Main />
            </div>
        );
    }
}

export default App;
