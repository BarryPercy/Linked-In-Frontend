import { fetchPosts } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { Card, Image, Button, Row, Col, Modal, Form } from "react-bootstrap";
import parseISO from "date-fns/parseISO";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { BsHandThumbsUp, BsFillHandThumbsUpFill } from "react-icons/bs";
import { MdOutlineInsertComment } from "react-icons/md";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { BsPencil } from "react-icons/bs";
import { deletePost } from "../../redux/actions";
import { editPost } from "../../redux/actions";

interface PostInterface {
  _id: string;
  text: string;
  username: string;
  user: User;
  createdAt: string;
  updatedAt: string;
  __v: number;
  image: string;
}

interface User {
  _id: string;
  name: string;
  surname: string;
  email: string;
  bio: string;
  title: string;
  area: string;
  image: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
const Posts = () => {
  const dispatch = useAppDispatch();
  let posts = useAppSelector((state) => state.posts.postList);
  let currentToken = useAppSelector((state) => state.users.currentToken);
  let currentUser = useAppSelector((state) => state.users.currentUser);
  let postsReverse = [...posts].reverse();
  let slicedPostsReverse = postsReverse.slice(0, 20);
  const [show, setShow] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const selectEditedPost = async (id: string) => {
    console.log("id of selected post", id);
  };
  const handlePostClose = () => setShow(false);
  const handlePostShow = (id: string, postText: string) => {
    setShow(true);
    setCurrentId(id);
    setNewPost({
      text: postText,
    });
  };
  const [newPost, setNewPost] = useState({
    text: "",
  });

  useEffect(() => {
    dispatch(fetchPosts(currentToken));
    console.log(slicedPostsReverse);
  }, []);
  return (
    <div>
      {slicedPostsReverse.map((post: PostInterface) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        let [liked, setLiked] = useState(false);
        const toggleLiked = () => {
          if (liked) {
            setLiked(false);
          } else {
            setLiked(true);
          }
        };
        return (
          <>
            <Modal show={show} onHide={handlePostClose} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Edit Post</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Control
                    type="text"
                    value={newPost.text}
                    onChange={(e) => {
                      setNewPost({
                        ...newPost,
                        text: e.target.value,
                      });
                    }}
                  />
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  // onClick={() => {
                  //   dispatch(deletePost(experience._id, currentToken));
                  //   handleClose2();
                  // }}
                  onClick={() => {
                    console.log(currentId, newPost);
                    dispatch(deletePost(currentId, currentToken));
                    handlePostClose();
                  }}
                >
                  Delete
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    console.log(currentId, newPost);
                    dispatch(editPost(newPost, currentId, currentToken));
                    handlePostClose();
                  }}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            <Card key={post._id} className="posts">
              {currentUser._id === post.user._id && (
                <BsPencil
                  className="pencil-icon pencil-post"
                  style={{ cursor: "pointer" }}
                  onClick={() => handlePostShow(post._id, post.text)}
                />
              )}
              <Card.Body className="ml-2 d-flex">
                <Card.Img
                  src={post.user.image}
                  className="avatar align-self-start"
                />
                <div>
                  <div className="d-flex">
                    <Card.Title>
                      <>
                        <Image src={post.image} />
                        <h6>
                          {post.user.name} {post.user.surname}
                        </h6>
                        <h6 className="post-user-title">{post.user.title}</h6>
                        <h6 className="post-user-title">
                          {formatDistanceToNowStrict(parseISO(post.createdAt))}{" "}
                          ago
                        </h6>
                      </>
                    </Card.Title>
                  </div>
                  <Card.Text>
                    <>
                      <p>{post.text}</p>
                      <p></p>
                    </>
                  </Card.Text>
                </div>
              </Card.Body>
              <Card.Body>
                <hr />
                <Row>
                  <Col
                    xs={3}
                    className="justify-content-center d-flex comment-icon"
                    onClick={toggleLiked}
                  >
                    {liked ? (
                      <div>
                        <BsFillHandThumbsUpFill className="align-self-center" />
                        Like
                      </div>
                    ) : (
                      <div>
                        <BsHandThumbsUp className="align-self-center" />
                        Like
                      </div>
                    )}
                  </Col>
                  <Col
                    xs={3}
                    className="justify-content-center d-flex comment-icon"
                  >
                    <MdOutlineInsertComment className="align-self-center" />{" "}
                    Comment
                  </Col>
                  <Col
                    xs={3}
                    className="justify-content-center d-flex comment-icon"
                  >
                    <BiRepost className="align-self-center" /> Repost
                  </Col>
                  <Col
                    xs={3}
                    className="justify-content-center d-flex comment-icon"
                  >
                    <IoIosSend className="align-self-center" /> Send
                  </Col>
                </Row>
              </Card.Body>
              {/* <Card.Img src={post.image}/>  */}
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default Posts;
