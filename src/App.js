import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Code from "./pages/Code";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/code">
            <Code />
          </Redirect>
        </Route>
        <Route path="/code" exact>
          <Code />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/404">
          <Redirect from="*" to="/404">
            <NotFound />
          </Redirect>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
