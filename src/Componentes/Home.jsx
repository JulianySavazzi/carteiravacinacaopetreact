import React, { Component } from 'react';
import logo from '../logo.svg';

class Home extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />                    
                </header>
            </div>
        );
    }
}

export default Home;