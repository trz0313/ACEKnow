import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./Components/AboutPage";
import CanadaPage from "./Components/Canada/CanadaPage";
import ChinaPage from "./Components/ChinaPage";
import BeforeArrival from "./Components/Canada/BeforeArrival";
import UponArrival from "./Components/Canada/UponArrival";
import AfterArrival from "./Components/Canada/AfterArrival";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      reactDev: false,
    }
  }

  componentDidMount() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      // dev code
      console.log("reactjs dev mode")
      this.setState({
        reactDev: true
      })
    }
  }

  render() {
    return(
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about" component={AboutPage} />
            <Route path="/tocanada/before" component={BeforeArrival} />
            <Route path="/tocanada/upon" component={UponArrival} />
            <Route path="/tocanada/after" component={AfterArrival} />
            <Route path="/tocanada" component={CanadaPage} />
            <Route path="/tochina" component={ChinaPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
