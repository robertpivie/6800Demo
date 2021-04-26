import { Fragment } from "react";
import "./Interests.css";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function Interests() {
  return (
    <Fragment>
      <br />
      <Card
        style={{
          border: "3px solid #63666a",
          boxShadow: "3px 3px #c4d600",
        }}
      >
        <Card.Body>
          <br />
          <br />
          <p
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon
              className="text-success"
              size="6x"
              icon={faCheckCircle}
            />
          </p>
          <br />
          <p
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h6 className="text-muted">Registration Completed!</h6>
          </p>
        </Card.Body>
      </Card>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button href="/landing" variant="primary" size="lg" block>
        Continue
      </Button>
    </Fragment>
  );
}

export default Interests;
