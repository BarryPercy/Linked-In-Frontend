import { Card, Image, Button, Col, Form } from "react-bootstrap";
import { FaPuzzlePiece, FaDeviantart } from "react-icons/fa";
import { AiFillCamera, AiOutlineCloudDownload } from "react-icons/ai";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { getSpecificUser, updateUser } from "../redux/actions";
import { Link, useParams } from "react-router-dom";
// import { BsPencil } from "react-icons/bs";

const Profile = () => {
  let experiences = useAppSelector((state) => (state.exps as any).expList);
  let currentProfileUser = useAppSelector(
    (state) => state.users.currentProfileUser
  );
  let currentUser = useAppSelector((state) => state.users.currentUser);
  let [show, setShow] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { userId } = useParams();
  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);
  let dispatch = useAppDispatch();
  const [image, setImage] = useState<File | null | undefined>(null);
  const [editProfileObj, setEditProfileObj] = useState({
    name: "",
    surname: "",
    area: "",
    title: "",
  });

  const handleSubmit = () => {
    dispatch(updateUser(editProfileObj, userId, image));
    handleClose();
  };

  // useEffect(() => {

  // }, []);
  return (
    <Col className="main px-0">
      <div className="my-3">
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Edit {currentProfileUser.name}'s Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                value={editProfileObj.name}
                onChange={(e) => {
                  setEditProfileObj({
                    ...editProfileObj,
                    name: e.target.value,
                  });
                }}
              />
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Surname"
                value={editProfileObj.surname}
                onChange={(e) => {
                  setEditProfileObj({
                    ...editProfileObj,
                    surname: e.target.value,
                  });
                }}
              />
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your current Location"
                value={editProfileObj.area}
                onChange={(e) => {
                  setEditProfileObj({
                    ...editProfileObj,
                    area: e.target.value,
                  });
                }}
              />
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your current Title"
                value={editProfileObj.title}
                onChange={(e) => {
                  setEditProfileObj({
                    ...editProfileObj,
                    title: e.target.value,
                  });
                }}
              />
              <Form.File
                id="imageFile"
                label="Upload an Image"
                accept="image/*"
                onChange={(e: any) =>
                  setImage((e.target as HTMLInputElement)?.files?.[0])
                }
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="profile-icon">
          {currentProfileUser !== undefined ? (
            <Image src={currentProfileUser.image} roundedCircle />
          ) : (
            ""
          )}
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
                <b>
                  {currentProfileUser !== undefined
                    ? currentProfileUser.name + " " + currentProfileUser.surname
                    : ""}
                </b>
                <Link
                  className="pdf-btn ml-2"
                  to={`${process.env.REACT_APP_BACK_END}/api/users/${currentProfileUser._id}/CV`}
                >
                  <AiOutlineCloudDownload />
                </Link>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {currentProfileUser !== undefined
                  ? currentProfileUser.title
                  : ""}
              </Card.Subtitle>
              <Card.Text>
                {currentProfileUser !== undefined
                  ? currentProfileUser.area
                  : ""}
                <Card.Link href="#"> Contact Info</Card.Link>
              </Card.Text>
              <Card.Link className="mt-0">89 connections</Card.Link>
            </Card.Body>
          </Card>
          <Card className="right-info ml-auto mr-5 pr-3">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                <FaPuzzlePiece /> {experiences[0]?.role}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <FaDeviantart /> {experiences[0]?.company}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>

        {userId === currentUser._id && (
          <div className="ml-3 button-area pb-3">
            <Button className="px-3 open-btn" variant="primary">
              Open to
            </Button>{" "}
            <Button
              className="add-btn"
              variant="outline-primary"
              onClick={handleShow}
            >
              Edit Profile
            </Button>{" "}
            <Button className="more-btn" variant="outline-secondary">
              More
            </Button>
          </div>
        )}
      </div>
    </Col>
  );
};

export default Profile;
