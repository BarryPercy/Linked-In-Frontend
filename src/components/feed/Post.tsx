import { Button, Card, Col, Form, Modal, Row, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getComments,
  postComment,
  postLikes,
  deletePost,
  editPost,
  friendRequest,
} from "../../redux/actions";
import { BsPencil } from "react-icons/bs";
import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail, BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";

interface PostInterface {
  _id: string;
  text: string;
  user: User;
  createdAt: string;
  updatedAt: string;
  __v: number;
  image: string;
  comments: Comment[];
  likes: User[];
}
interface Comment {
  _id: string;
  comment: string;
  user: User;
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
  createdAt: string;
  updatedAt: string;
  __v: number;
  social: Social;
}

interface PostProps {
  post: PostInterface;
}
interface Social {
  pending: string[];
  sent: string[];
  friends: string[];
}

const Post: React.FC<PostProps> = ({ post }) => {
  let currentUser = useAppSelector((state) => state.users.currentUser);
  const [currentId, setCurrentId] = useState("");
  const dispatch = useAppDispatch();
  const handlePostClose = () => setShow(false);
  const [currentComments, setCurrentComments] = useState<Comment[]>([]);
  const [openComments, setOpenComments] = useState<string[]>([]);
  const toggleComments = async (idOfPost: string) => {
    if (openComments.includes(idOfPost)) {
      setOpenComments(openComments.filter((id) => id !== idOfPost));
    } else {
      setOpenComments([...openComments, idOfPost]);
      try {
        let response = await fetch(
          `${process.env.REACT_APP_BACK_END}/api/posts/` +
            idOfPost +
            "/comments"
        );
        if (response.ok) {
          let data = await response.json();
          setCurrentComments(data);
          console.log("current comments->", currentComments);
        } else {
          console.log("Uh oh!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleCommentSubmit = async (idOfPost: string) => {
    const object = {
      comment: newComment.text,
      user: currentUser._id,
      post: idOfPost,
    };
    console.log(object);
    dispatch(postComment(object, idOfPost));
    if (openComments.includes(idOfPost)) {
    } else {
      setOpenComments([...openComments, idOfPost]);
      try {
        let response = await fetch(
          `${process.env.REACT_APP_BACK_END}/api/posts/` +
            idOfPost +
            "/comments"
        );
        if (response.ok) {
          let data = await response.json();
          setCurrentComments(data);
          console.log("current comments->", currentComments);
        } else {
          console.log("Uh oh!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handlePostShow = (id: string, postText: string) => {
    setShow(true);
    console.log(id);
    setCurrentId(id);
    setNewPost({
      text: postText,
    });
  };
  const clickLike = (idOfPost: string) => {
    console.log("post likes->", post?.likes);
    console.log(
      "post truth",
      post?.likes.some((item) => item._id === currentUser._id)
    );
    dispatch(postLikes(idOfPost, currentUser._id));
    getThisPost();
  };
  const [newPost, setNewPost] = useState({
    text: "",
  });
  const [newComment, setNewComment] = useState({
    text: "",
  });
  const [show, setShow] = useState(false);
  const getThisPost = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACK_END}/api/posts/` + post._id
      );
      if (response.ok) {
        let data = await response.json();
      } else {
        console.log("Fetching Post " + post._id + " went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, []);
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
            onClick={() => {
              console.log(currentUser._id, newPost);
              dispatch(deletePost(currentId));
              handlePostClose();
            }}
          >
            Delete
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(editPost(newPost, currentId));
              handlePostClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Card className="posts">
        {currentUser._id === post.user._id && (
          <BsPencil
            className="pencil-icon pencil-post"
            style={{ cursor: "pointer" }}
            onClick={() => handlePostShow(post._id, post.text)}
          />
        )}
        <Card.Body className="ml-2 d-flex">
          <Card.Img src={post.user.image} className="avatar align-self-start" />
          <div>
            <div className="d-flex">
              <Card.Title>
                <>
                  <div className="d-flex align-items-center">
                    <h6>
                      {post.user.name} {post.user.surname}
                    </h6>
                    {currentUser.social ? (
                      currentUser.social.friends.find(
                        (e: User) => e._id === post.user._id
                      ) ||
                      currentUser.social.sent.find(
                        (e: User) => e._id === post.user._id
                      ) ||
                      currentUser.social.pending.find(
                        (e: User) => e._id === post.user._id
                      ) ||
                      currentUser._id === post.user._id ? (
                        ""
                      ) : (
                        <Button
                          className="friend-button ml-2"
                          onClick={() =>
                            dispatch(
                              friendRequest(currentUser._id, post.user._id)
                            )
                          }
                        >
                          Add friend
                        </Button>
                      )
                    ) : (
                      ""
                    )}
                  </div>
                  <h6 className="post-user-title">{post.user.title}</h6>
                  <h6 className="post-user-title">
                    {formatDistanceToNowStrict(parseISO(post.createdAt))} ago
                  </h6>
                </>
              </Card.Title>
            </div>
            <Card.Text>
              <>
                <p>{post.text}</p>
              </>
            </Card.Text>
          </div>
        </Card.Body>
        {post.image ? (
          <Card.Img src={post.image} className="post-image-changes" />
        ) : (
          ""
        )}
        <Card.Body>
          <>
            <Row>
              <Col className="col-9">
                <p>{post.likes.length} Likes</p>
              </Col>
              <Col className="col-3">
                <p>{post.comments.length} comments</p>
              </Col>
            </Row>
            <hr />
            <Form>
              <Row>
                <Col
                  xs={3}
                  className="justify-content-center d-flex comment-icon"
                  onClick={() => clickLike(post._id)}
                >
                  {post?.likes.some((item) => item._id === currentUser._id) ? (
                    <>
                      <AiFillLike size={22} className="icon-flipped liked" />
                      <span className="liked">Like</span>
                    </>
                  ) : (
                    <>
                      <AiOutlineLike size={22} className="icon-flipped" />
                      Like
                    </>
                  )}
                </Col>
                <Col
                  xs={3}
                  className="justify-content-center d-flex comment-icon"
                  onClick={() => {
                    toggleComments(post._id);
                  }}
                >
                  <BiCommentDetail size={25} className="icon-flipped" />
                  Comment
                </Col>
                <Col
                  xs={3}
                  className="justify-content-center d-flex comment-icon"
                >
                  <BiRepost size={22} /> Repost
                </Col>
                <Col
                  xs={3}
                  className="justify-content-center d-flex comment-icon"
                  onClick={() => {
                    handleCommentSubmit(post._id);
                  }}
                >
                  <IoIosSend size={22} /> Send
                </Col>
              </Row>
              <Row className="align-items-center justify-content-center">
                <Col className="col-2">
                  <Image src={currentUser.image} className="avatar-comment" />
                </Col>
                <Col className="col-10">
                  <Form.Control
                    type="text"
                    placeholder="Add a comment..."
                    style={{ borderRadius: "30px" }}
                    onChange={(e) => {
                      setNewComment({
                        ...newComment,
                        text: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
            </Form>
            {openComments.includes(post._id)
              ? currentComments.map((commentObject: Comment) => {
                  return (
                    <Row
                      key={commentObject._id}
                      className="align-items-center justify-content-center"
                    >
                      <Col className="col-2">
                        <Image
                          src={commentObject.user.image}
                          className="avatar-comment"
                        />
                      </Col>
                      <Col className="comment-box col-10">
                        <p className="comment-user-name">
                          <strong>
                            {commentObject.user.name}{" "}
                            {commentObject.user.surname}
                          </strong>
                        </p>
                        <p className="comment-user-title">
                          {commentObject.user.title}
                        </p>
                        <p className="comment-text">{commentObject.comment}</p>
                      </Col>
                    </Row>
                  );
                })
              : ""}
          </>
        </Card.Body>
      </Card>
    </>
  );
};

export default Post;
