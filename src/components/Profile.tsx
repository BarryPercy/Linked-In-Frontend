import { Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>{/* Image banner goes here */}</div>
          <div>{/* profile icon goes here */}</div>
          <div>{/* left info section goes here */}</div>
          <div>{/* right info section goes here & notification bell */}</div>
          <div>{/* message and more button goes here */}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
