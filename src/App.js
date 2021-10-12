import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
