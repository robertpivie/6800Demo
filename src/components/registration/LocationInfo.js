import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function AddressInformation() {
  return (
    <Card>
      <Card.Body>
        <Form.Group controlId="formBasicAddr">
          <Form.Control type="text" placeholder="Address" label="Address" />
          <Form.Text className="text-muted">
            We'll need this information to help you find new opportunities.
          </Form.Text>
        </Form.Group>
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
      </Card.Body>
    </Card>
  );
}

export default AddressInformation;
