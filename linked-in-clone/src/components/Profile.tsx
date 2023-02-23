import { Card, Image, Button, Col } from "react-bootstrap";
import { FaPuzzlePiece, FaDeviantart } from "react-icons/fa";
import { AiFillCamera } from "react-icons/ai";
// import { BsPencil } from "react-icons/bs";

const Profile = () => {
  return (
    <Col className="main px-0">
      <div className="my-3">
        <div className="profile-icon">
          <Image
            src="https://media.licdn.com/dms/image/D4E03AQFBRCddXjTZ3w/profile-displayphoto-shrink_800_800/0/1669330248977?e=1682553600&v=beta&t=u1MdICh1S9B2m1w-JCGExm0Rpa8wYAIdtdioe_DLjqw"
            roundedCircle
          />
        </div>
        <div className="img-area">
          <div className="camera-btn mr-3 d-flex justify-content-center align-items-center">
            <AiFillCamera />
          </div>
        </div>
        <div className="d-flex mt-5 pt-2">
          <Card className="left-info">
            <Card.Body className="profile-info-area">
              <Card.Title>
                <b>Jovellyn Quiapos</b>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Jr Full Developer
              </Card.Subtitle>
              <Card.Text>
                Dublin, Ireland <Card.Link href="#"> Contact Info</Card.Link>
              </Card.Text>
              <Card.Link className="mt-0">89 connections</Card.Link>
            </Card.Body>
          </Card>
          <Card className="right-info ml-auto mr-5 pr-3">
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

        <div className="ml-3 button-area pb-3">
          <Button className="px-3 open-btn" variant="primary">
            Open to
          </Button>{" "}
          <Button className="add-btn" variant="outline-primary">
            Add profile section
          </Button>{" "}
          <Button className="more-btn" variant="outline-secondary">
            More
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default Profile;
