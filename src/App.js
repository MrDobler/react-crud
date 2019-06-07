import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import List from './components/list/List';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <Router>
                <Nav/>
                <div className="App">
                    <Switch>
                        <Route path="/" exact render={() => <Header title={"Projeto Boladão"} />}/>
                        <Route path="/users" exact component={List}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
