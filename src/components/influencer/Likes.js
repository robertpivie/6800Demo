import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Likes() {
  return (
    <Card>
      <Card.Body>
        <h6 style={{ display: "flex", justifyContent: "space-between" }}>
          <span>LIKES</span>
          <small>
            <a className="text-info">
              <FontAwesomeIcon size="1x" icon={faFacebook} />
            </a>
            &nbsp;
            <a className="text-info">
              <FontAwesomeIcon size="1x" icon={faTwitter} />
            </a>
            &nbsp;
            <a className="text-info">
              <FontAwesomeIcon size="1x" icon={faLinkedin} />
            </a>
          </small>
        </h6>
        <hr className="text-info" />
        <h1 style={{ textAlign: "center" }}>
          <FontAwesomeIcon size="1x" icon={faFacebook} className="text-info" />
          &nbsp;
          <strong>533</strong>
        </h1>
      </Card.Body>
    </Card>
  );
}

export default Likes;
