import React from "react";
import { Card } from "react-bootstrap";

export default function Viewer(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}
