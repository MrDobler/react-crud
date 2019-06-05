import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

export class Header extends Component {
    render() {
        
        let headerData = this.props.header;
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>{headerData.title}</h1>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
            </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"> 
                    Learn React 
                </a>
            </header>
        );
    }
}
