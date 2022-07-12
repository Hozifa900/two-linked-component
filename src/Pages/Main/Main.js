import React from "react";
import { useContext } from "react";
import { DataContext } from "../../Model/DataContext";
import { Container, Row, Col } from "react-bootstrap";
import Viewer from "../Viewer/Viewer";
import List from "../List/List";
import "./Main.css";

export default function Main() {
  const [img, setImg, title, setTitle, body, setBody] = useContext(DataContext);
  return (
    <Container className="main">
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={6} className="center-item">
          <Viewer title={title} src={img} body={body} />
        </Col>
        <Col xs={12} md={6}>
          <List />
        </Col>
      </Row>
    </Container>
  );
}
