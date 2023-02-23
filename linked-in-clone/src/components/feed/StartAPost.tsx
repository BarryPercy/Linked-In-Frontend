import React from "react";
import { MdPhotoSizeSelectActual, MdOutlineArticle } from "react-icons/md";
import {
  BsFillPlayBtnFill,
  BsBriefcaseFill,
  BsEmojiSmile,
  BsFillFileEarmarkTextFill,
  BsThreeDots,
} from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import { Card, Image, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useAppDispatch } from "../../redux/hooks";
import { postPost } from "../../redux/actions";
import {} from "react-icons/bs";

export default function StartAPost() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [post, setPost] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
    const object = {
      text: "",
    };
    object.text += post;
    dispatch(postPost(object));
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
              <Image
                className="avatar"
                src="./images/jovelynn.png "
                alt="Avatar"
                style={{ height: "100%" }}
              />
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
                    <Image className="avatar" src="./images/jovelynn.png" />
                    <h5 className="align-self-center">Jovellyn Quiapos</h5>
                  </div>
                  <Form.Control
                    className="post-area"
                    as="textarea"
                    placeholder="What do you want to talk about?"
                    style={{ height: "150px" }}
                    onChange={(e) => {
                      setPost(e.target.value);
                    }}
                    value={post}
                  />
                </Modal.Body>
                <div className="ml-3 mb-3 icon-posts">
                  <BsEmojiSmile style={{ fontSize: "25px" }} />
                </div>
                <div className="d-flex">
                  <div className="d-flex side-post-icons">
                    <Button
                      className="img-icon-btn ml-3 mb-2"
                      onClick={() => {
                        handleClose();
                        handleShow2();
                      }}
                    >
                      <div>
                        <MdPhotoSizeSelectActual style={{ fontSize: "25px" }} />
                      </div>
                    </Button>

                    <div className=" mb-2 icon-posts">
                      <BsFillPlayBtnFill style={{ fontSize: "25px" }} />
                    </div>
                    <div className=" mb-2 icon-posts">
                      <BsFillFileEarmarkTextFill style={{ fontSize: "25px" }} />
                    </div>
                    <div className=" mb-2 icon-posts">
                      <BsThreeDots style={{ fontSize: "25px" }} />
                    </div>
                  </div>
                  <div className="right-side-icon ml-auto mr-3">
                    <Button variant="primary" onClick={handleSubmit}>
                      Post
                    </Button>
                  </div>
                </div>
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
                {/* <div className="d-flex my-2">
                  <Image className="avatar" src="./images/jovelynn.png" />
                  <h5 className="align-self-center">Jovellyn Quiapos</h5>
                </div> */}
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
