import { fetchPosts, postComment, postLikes } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { Card, Button, Row, Col, Modal, Form, Image } from "react-bootstrap";
import parseISO from "date-fns/parseISO";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { BsHandThumbsUp, BsFillHandThumbsUpFill } from "react-icons/bs";
import { MdOutlineInsertComment } from "react-icons/md";
import { BiCommentDetail, BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { BsPencil } from "react-icons/bs";
import { deletePost } from "../../redux/actions";
import { editPost } from "../../redux/actions";
import { AiOutlineLike } from "react-icons/ai";

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
const Posts = () => {
  const dispatch = useAppDispatch();
  let posts = useAppSelector((state) => state.posts.postList);
  let currentUser = useAppSelector((state) => state.users.currentUser);
  const [openComments, setOpenComments] = useState<string[]>([]);
  let postsReverse = [...posts].reverse()
  const [show, setShow] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const selectEditedPost = async (id: string) => {
    console.log("id of selected post", id);
  };
  const [like,setLike] = useState({});
  const handlePostClose = () => setShow(false);
  const toggleComments=(idOfPost:string)=>{
    if (openComments.includes(idOfPost)){
      setOpenComments(openComments.filter(id=>id!=idOfPost))
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
  const [newPost, setNewPost] = useState({
    text: "",
  });
  const [newComment, setNewComment] = useState({
    text: "",
  })
  const clickLike = (idOfPost:string)=>{
    dispatch(postLikes(idOfPost,currentUser._id))
  }
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return(
    <div>
      {posts.length>0? postsReverse.map((post: PostInterface) => {
        return(
        <div key={post._id}>
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
                      className="avatar"
                      src={currentUser.image}
                      style={{ borderRadius:"50%" }}
                    />
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
          </div>
        )
      }):<p>No Posts yet!</p>}
    </div>
  );
};

export default Posts;
