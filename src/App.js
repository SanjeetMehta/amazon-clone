import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import "./Header.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/checkout">checkout</Route>
                    <Route path="/login">login</Route>
                    <Route path="/">
                        <Header></Header>
                        home page
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
