import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Friend from "./Components/Friend/Friend";
import Home from "./Components/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";
import ShowDetail from "./Components/ShowDetails/ShowDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/friend-detail/:friendId">
            <ShowDetail />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
