import { Button, Card, Col, Form, Modal, Row, Image } from "react-bootstrap";
import react, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPosts, getComments, postComment, postLikes, deletePost, editPost } from "../../redux/actions";
import { BsPencil } from "react-icons/bs";
import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { AiOutlineLike } from "react-icons/ai";
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
    likes: string[];
  }
  interface Comment{
    _id:string;
    comment:string;
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
  }

  interface PostProps {
    post: PostInterface;
  }

const Post: React.FC<PostProps> = ({post}) => {
    const [currentId, setCurrentId] = useState("");
    const dispatch = useAppDispatch();
    const handlePostClose = () => setShow(false);
    const [openComments, setOpenComments] = useState<string[]>([]);
    const toggleComments=(idOfPost:string)=>{
    if (openComments.includes(idOfPost)){
        setOpenComments(openComments.filter(id=>id!==idOfPost))
        }else{
        setOpenComments([...openComments,idOfPost])
        }
    }
    const handleCommentSubmit = (idOfPost:string)=>{
        const object = {
        comment:newComment.text,
        user:currentUser._id,
        post:idOfPost
        }
        console.log(object)
        dispatch(postComment(object,idOfPost))
    }
    const handlePostShow = (id: string, postText: string) => {
        setShow(true);
        console.log(id)
        setCurrentId(id);
        setNewPost({
        text: postText,
        });
    };
    const clickLike = (idOfPost:string)=>{
        dispatch(postLikes(idOfPost,currentUser._id))
    }
    const [newPost, setNewPost] = useState({
        text: "",
      });
      const [newComment, setNewComment] = useState({
        text: "",
      })
    const [show, setShow] = useState(false);
    let currentUser = useAppSelector((state) => state.users.currentUser);
    return(
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
              {post.image?<Card.Img src={post.image} className="post-image-changes"/>:""}
              <Card.Body>
              <>
                <hr />
                <Form>
                <Row>
                
                  <Col
                    xs={3}
                    className="justify-content-center d-flex comment-icon"
                    onClick={()=>clickLike(post._id)}
                  >
                    <AiOutlineLike size={22} className="icon-flipped"/>
                    Like
                  </Col>
                  <Col
                    xs={3}
                    className="justify-content-center d-flex comment-icon"
                    onClick={()=>{
                      toggleComments(post._id)
                    }}
                  >
                    <BiCommentDetail size={25} className="icon-flipped" />
                    Comment
                  </Col>
                  <Col
                    xs={3}
                    className="justify-content-center d-flex comment-icon"
                  >
                    <BiRepost size={22}/> Repost
                  </Col>
                  <Col
                    xs={3}
                    className="justify-content-center d-flex comment-icon"
                    onClick={()=>{
                      handleCommentSubmit(post._id)
                    }
                    }
                  >
                    <IoIosSend size={22}/> Send
                  </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                
                  <Col className="col-2">
                    <Image
                    src={currentUser.image}
                    className="avatar"/>
                  </Col>
                  <Col className="col-10">
                    
                      <Form.Control
                        type="text"
                        placeholder="Add a comment..."
                        style={{ borderRadius: "30px"}}
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
                {openComments.includes(post._id)?post.comments.map((commentObject:Comment)=>{
                  return(
                  <Row>
                    <div className="comment-box">
                      <p>{commentObject.comment}</p>
                    </div>
                  </Row>
                  )
                }):""}
                </>      
              </Card.Body>
            </Card>
            </>
            )
}

export default Post;