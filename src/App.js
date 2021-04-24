import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GetStarted from "./components/GetStarted";
import Welcome from "./components/Welcome";
import Interests from "./components/Interests";
import Landing from "./components/Landing";

function App() {
  return (
    <Router className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/landing">
          <img
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="nupower logo"
          />{" "}
          NuPower
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <br />
            <hr />
            <br />
            <Switch>
              <Route exact path="/">
                <h1>Sign Up</h1>
                <br />
                <GetStarted />
              </Route>
              <Route exact path="/welcome">
                <h1>Welcome</h1>
                <br />
                <Welcome />
              </Route>
              <Route exact path="/interests">
                <h1>My Interests</h1>
                <br />
                <Interests />
              </Route>
              <Route exact path="/landing">
                <h1>My Landing</h1>
                <br />
                <Landing />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
      <footer>
        <br />
      </footer>
    </Router>
  );
}

export default App;
