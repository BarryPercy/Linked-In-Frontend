import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { FaPuzzlePiece, FaDeviantart } from "react-icons/fa";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <div className="profile-area">
            <div className="img-area">
              <Image src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg" />
            </div>
            <div>{/* profile icon goes here */}</div>
            <div className="d-flex">
              <Card className="left-info">
                <Card.Body>
                  <Card.Title>Jovellyn Quiapos</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Jr Full Developer
                  </Card.Subtitle>
                  <Card.Text>
                    Dublin, Ireland{" "}
                    <Card.Link href="#"> Contact Info</Card.Link>
                  </Card.Text>
                  <Card.Link href="#">89 connections</Card.Link>
                </Card.Body>
              </Card>
              <Card className="right-info ml-auto mr-5">
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    <FaPuzzlePiece /> EPICODE
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    <FaDeviantart /> JAnne Studios
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>

            <div>{/* message and more button goes here */}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
