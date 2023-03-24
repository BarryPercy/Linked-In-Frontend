import { MdPhotoSizeSelectActual, MdOutlineArticle } from "react-icons/md";
import { BsFillPlayBtnFill, BsBriefcaseFill } from "react-icons/bs";
import { Card, Image, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { postPost } from "../../redux/actions";

export default function StartAPost() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [post, setPost] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useAppDispatch();
  const [image, setImage] = useState<File | null | undefined>(null);
  let currentUser = useAppSelector((state) => state.users.currentUser);
  const handleSubmit = () => {
    const object = {
      text: "",
      user: currentUser._id,
    };
    object.text += post;
    dispatch(postPost(object, image));

    handleClose();
  };

  //  This is for the upload modal
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => {
    setShow2(true);
  };

  return (
    <>
      <Card className="start-post mb-3">
        <div id="feed-start-a-post-container" className="p-feed">
          <div id="start-a-post-top">
            <div
              className="recommended-user-image mr-1 d-flex p-3"
              style={{ objectFit: "cover" }}
            >
              <Image className="avatar-post" src={currentUser.image} />
              <Button
                id="start-a-post"
                className="start-a-post-button d-flex border ml-3 p-1"
                style={{ borderRadius: "30px", width: "400px" }}
                onClick={handleShow}
              >
                <span className="align-self-center text-button-start">
                  Start a post
                </span>
              </Button>
              <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>Create a Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="d-flex my-2">
                    <Image className="avatar" src={currentUser.image} />
                    <h5 className="align-self-center">
                      {currentUser.name} {currentUser.surname}
                    </h5>
                  </div>
                  <Form.Control
                    as="textarea"
                    placeholder="What do you want to talk about?"
                    style={{ height: "150px" }}
                    onChange={(e) => {
                      setPost(e.target.value);
                    }}
                    value={post}
                  />
                  <Form.Group>
                    <Form.Label>Choose an image to upload:</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setImage((e.target as HTMLInputElement)?.files?.[0])
                      }
                    />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleSubmit}>
                    Post
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <div
            id="start-a-post-lower"
            className="small-header-text d-flex justify-content-around"
          >
            <Button
              id="start-a-picture"
              className="start-a-picture-button d-flex  ml-3 p-1"
              onClick={handleShow2}
            >
              <div className="start-a-post-icon-text d-flex align-items-center">
                <MdPhotoSizeSelectActual
                  className="text-primary"
                  style={{ fontSize: "20px" }}
                />

                <span className="pl-2">Photo</span>
              </div>
            </Button>
            <Modal show={show2} onHide={handleClose2} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Upload Image</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="upload-area">
                  <Button id="share-a-img" className="share-a-img-btn">
                    Select image to share
                  </Button>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="cancel-img-btn"
                  variant="primary"
                  onClick={handleClose2}
                >
                  Cancel
                </Button>
                <Button className="upload-img-btn" variant="secondary">
                  Done
                </Button>
              </Modal.Footer>
            </Modal>
            <div className="start-a-post-icon-text gray-hover d-flex align-items-center ">
              <BsFillPlayBtnFill
                className="text-success"
                style={{ fontSize: "20px" }}
              />
              <span className="pl-2">Video</span>
            </div>
            <div className="start-a-post-icon-text gray-hover d-flex align-items-center">
              <BsBriefcaseFill
                className="indigo"
                style={{ fontSize: "20px" }}
              />
              <span className="pl-2">Job</span>
            </div>
            <div className="start-a-post-icon-text gray-hover d-flex align-items-center">
              <MdOutlineArticle
                className="orange"
                style={{ fontSize: "20px" }}
              />
              <span className="pl-2">Write Article</span>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
