import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GetStarted from "./pages/GetStarted";
import Welcome from "./pages/Welcome";
import Interests from "./pages/Interests";
import Landing from "./pages/Landing";
import Delivery from "./pages/Delivery";
import Service from "./pages/Service";
import Sales from "./pages/Sales";
import Training from "./pages/Training";
import Influence from "./pages/Influence";

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
            alt="logo"
          />{" "}
          Nu
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
                <h1>Let's Get to Work!</h1>
                <br />
                <Landing />
              </Route>
              <Route exact path="/delivery">
                <h1>My Deliveries</h1>
                <br />
                <Delivery></Delivery>
              </Route>
              <Route exact path="/sales">
                <h1>My Sales</h1>
                <br />
                <Sales></Sales>
              </Route>
              <Route exact path="/service">
                <h1>My Service</h1>
                <br />
                <Service></Service>
              </Route>
              <Route exact path="/training">
                <h1>My Training</h1>
                <br />
                <Training></Training>
              </Route>
              <Route exact path="/influence">
                <h1>My Influence</h1>
                <br />
                <Influence></Influence>
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
