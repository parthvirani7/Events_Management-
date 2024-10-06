// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import Event from './pages/Event';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create-event" component={CreateEvent} />
                <Route path="/events/:eventId" component={Event} />
            </Switch>
        </Router>
    );
};

export default App;
