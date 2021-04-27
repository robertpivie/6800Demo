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
import Stories from "./pages/Stories";
import { Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Dashboards" id="basic-nav-dropdown">
              <NavDropdown.Item href="/delivery">Delivery</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service">Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/sales">Sales</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/training">Training</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/influence">Influencer</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/stories">Stories</Nav.Link>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faLock} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <br />
            <hr />
            <br />
            <Switch>
              <Route exact path="/">
                <h2 style={{ textAlign: "center" }}>Sign Up</h2>
                <br />
                <GetStarted />
              </Route>
              <Route exact path="/welcome">
                <h2 style={{ textAlign: "center" }}>Thank You!</h2>
                <br />
                <Welcome />
              </Route>
              <Route exact path="/interests">
                <h2 style={{ textAlign: "center" }}>Interests</h2>
                <br />
                <Interests />
              </Route>
              <Route exact path="/landing">
                <h2 style={{ textAlign: "center" }}>Let's Get to Work!</h2>
                <br />
                <Landing />
              </Route>
              <Route exact path="/delivery">
                <h2 style={{ textAlign: "center" }}>Deliveries Dashboard</h2>
                <br />
                <Delivery></Delivery>
              </Route>
              <Route exact path="/sales">
                <h2 style={{ textAlign: "center" }}>Sales Dashboard</h2>
                <br />
                <Sales></Sales>
              </Route>
              <Route exact path="/service">
                <h2 style={{ textAlign: "center" }}>Service Dashboard</h2>
                <br />
                <Service></Service>
              </Route>
              <Route exact path="/training">
                <h2 style={{ textAlign: "center" }}>Training Dashboard</h2>
                <br />
                <Training></Training>
              </Route>
              <Route exact path="/influence">
                <h2 style={{ textAlign: "center" }}>Influencer Dashboard</h2>
                <br />
                <Influence></Influence>
              </Route>
              <Route exact path="/stories">
                <h2 style={{ textAlign: "center" }}>Success Stories</h2>
                <br />
                <Stories></Stories>
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
