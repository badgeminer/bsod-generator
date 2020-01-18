import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./pages/Home";
import Image from "./pages/Image";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path={"/"} exact>
                    <Home/>
                </Route>
                <Route path={"/image"} exact>
                    <Image/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
