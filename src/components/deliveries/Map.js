import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Fragment } from "react";

function Map() {
  return (
    <Fragment>
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
        <Marker position={[51.505, -0.092]}>
          <Popup>Mark Otto</Popup>
        </Marker>
        <Marker position={[51.505, -0.093]}>
          <Popup>Jacob Thornton</Popup>
        </Marker>
        <Marker position={[51.505, -0.09]}>
          <Popup>Larry the Bird</Popup>
        </Marker>
      </MapContainer>
    </Fragment>
  );
}

export default Map;
