import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/checkout">
                        <Header></Header>
                        checkout
                    </Route>
                    <Route path="/login">login</Route>
                    <Route path="/">
                        <Header></Header>
                        <Home></Home>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
