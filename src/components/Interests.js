import "./Interests.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv,
  faHeadset,
  faShippingFast,
  faMoneyBill,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";

function Interests() {
  return (
    <Accordion defaultActiveKey="0">
      <Container>
        <Row>
          <Col xs={12}>
            <Accordion.Toggle
              className="btn btn-outline-primary btn-block"
              eventKey="0"
            >
              <h4>Delivery</h4>
              <FontAwesomeIcon size="4x" icon={faShippingFast} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <div>
                <br />
                <p>
                  To help you get started, we'll need a bit more information.
                </p>
                <Form>
                  <Form.Group controlId="formBasicFN">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="first" placeholder="First Name" />
                    <Form.Text className="text-muted">
                      {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicLN">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="last" placeholder="Last Name" />
                    <Form.Text className="text-muted">
                      {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicAddr">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" />
                    <Form.Text className="text-muted">
                      We'll need this information to help you find work.
                    </Form.Text>
                  </Form.Group>
                </Form>
                <MapContainer
                  center={[51.505, -0.09]}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{
                    height: "200px",
                  }}
                >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[51.505, -0.09]}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
                <hr />
              </div>
            </Accordion.Collapse>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <Accordion.Toggle
              className="btn btn-outline-info btn-block"
              eventKey="1"
            >
              <h4>Service</h4>
              <FontAwesomeIcon size="4x" icon={faHeadset} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <div>
                <br />
                <p>
                  To help you get started, we'll need a bit more information.
                </p>
                <Form>
                  <Form.Group controlId="formBasicFN">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="first" placeholder="First Name" />
                    <Form.Text className="text-muted">
                      {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicLN">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="last" placeholder="Last Name" />
                    <Form.Text className="text-muted">
                      {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicMbl">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="mobile" placeholder="Mobile" />
                    <Form.Text className="text-muted">
                      We'll need this information to send you calls.
                    </Form.Text>
                  </Form.Group>
                </Form>
                <hr />
              </div>
            </Accordion.Collapse>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <Accordion.Toggle
              className="btn btn-outline-warning btn-block"
              eventKey="2"
            >
              <h4>Sales</h4>
              <FontAwesomeIcon size="4x" icon={faMoneyBill} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <div>
                <br />
                <p>
                  To help you get started, we'll need a bit more information.
                </p>
                <Form>
                  <Form.Group controlId="formBasicFN">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="first" placeholder="First Name" />
                    <Form.Text className="text-muted">
                      {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicLN">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="last" placeholder="Last Name" />
                    <Form.Text className="text-muted">
                      {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicSSN">
                    <Form.Label>Social Security Number</Form.Label>
                    <Form.Control type="text" placeholder="SSN" />
                    <Form.Text className="text-muted">
                      We'll need this information to prepare sales forms.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicBD">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control type="text" placeholder="Birthday" />
                    <Form.Text className="text-muted">
                      We'll need this information to prepare sales forms.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicMbl">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="mobile" placeholder="Mobile" />
                    <Form.Text className="text-muted">
                      We'll need this information to coordinate your new
                      opportunities.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicAddr">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" />
                    <Form.Text className="text-muted">
                      We'll need this information to help you find new
                      opportunities.
                    </Form.Text>
                  </Form.Group>
                </Form>
                <MapContainer
                  center={[51.505, -0.09]}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{
                    height: "200px",
                  }}
                >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[51.505, -0.09]}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
                <hr />
              </div>
            </Accordion.Collapse>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <Accordion.Toggle
              className="btn btn-outline-success btn-block"
              eventKey="3"
            >
              <h4>Training</h4>
              <FontAwesomeIcon size="4x" icon={faChalkboardTeacher} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <div>
                <br />
                <p>
                  To help you get started, we'll need a bit more information.
                </p>
                <Form>
                  <Form.Group controlId="formBasicFN">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="first" placeholder="First Name" />
                    <Form.Text className="text-muted">
                      {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicLN">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="last" placeholder="Last Name" />
                    <Form.Text className="text-muted">
                      {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                  </Form.Group>
                </Form>
                <hr />
              </div>
            </Accordion.Collapse>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <Accordion.Toggle
              className="btn btn-outline-danger btn-block"
              eventKey="4"
            >
              <h4>Influence</h4>
              <FontAwesomeIcon size="4x" icon={faTv} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <div>
                <br />
                <p>
                  To help you get started, we'll need a bit more information.
                </p>
                <Form>
                  <Form.Group controlId="formBasicFN">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="first" placeholder="First Name" />
                    <Form.Text className="text-muted">
                      {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicLN">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="last" placeholder="Last Name" />
                    <Form.Text className="text-muted">
                      {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicURL">
                    <Form.Label>URL</Form.Label>
                    <Form.Control type="last" placeholder="URL" />
                    <Form.Text className="text-muted">
                      This information will help us drive traffic to your
                      content.
                    </Form.Text>
                  </Form.Group>
                </Form>
                <hr />
              </div>
            </Accordion.Collapse>
            <br />
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I approve the necessary use of this information."
              />
            </Form.Group>
            <Button href="/landing" variant="primary" size="lg" block>
              I'm Done
            </Button>
            <br />
          </Col>
        </Row>
      </Container>
    </Accordion>
  );
}

export default Interests;
