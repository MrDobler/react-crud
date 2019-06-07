import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

export class Header extends Component {

    render() {
        
        let headerTitle = this.props.title;
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>{headerTitle}</h1>
                <p>
                    É nóis.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"> 
                    Segue o Baile
                </a>
            </header>
        );
    }
}
