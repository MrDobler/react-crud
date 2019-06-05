import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Header } from './components/header/Header';
import Form from './components/form/Form';
import List from './components/list/List';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header header={{ title: 'Projeto Boladão', number: 666 }}/>
                <div className="container">
                    <List></List>
                    <Form></Form>                    
                </div>
            </div>
        );
    }
}

export default App;
