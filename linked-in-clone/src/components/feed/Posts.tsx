import { fetchPosts} from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { Card, Image, Button, Row, Col } from 'react-bootstrap'
import parseISO from 'date-fns/parseISO'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { BsHandThumbsUp, BsFillHandThumbsUpFill } from 'react-icons/bs'
import { MdOutlineInsertComment } from 'react-icons/md'
import { BiRepost } from 'react-icons/bi'
import { IoIosSend } from 'react-icons/io'

interface PostInterface{
    _id: string;
    text: string;
    username: string;
    user: User;
    createdAt: string;
    updatedAt: string;
    __v: number;
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
    let postsReverse = [...posts].reverse();
    let slicedPostsReverse = postsReverse.slice(0,20);

    

    useEffect(() => {
        dispatch(fetchPosts(currentToken));
        console.log(slicedPostsReverse)
      }, []);
    return (
        <div>
            {slicedPostsReverse.map((post: PostInterface) => {
                let [liked, setLiked] = useState(false)
                const toggleLiked = ()=>{
                    if(liked){
                        setLiked(false)
                    }else{
                        setLiked(true)
                    }
                }
                return (
                    <Card key={post._id} className="posts">
                        <Card.Body className="ml-2 d-flex">
                            <Card.Img src={post.user.image} className="avatar align-self-start"/>
                            <div>
                                <Card.Title>
                                    <>
                                        <h6>{post.user.name} {post.user.surname}</h6>
                                        <h6 className="post-user-title">{post.user.title}</h6>
                                        <h6 className="post-user-title">{formatDistanceToNowStrict(parseISO(post.createdAt))} ago</h6>
                                    </>
                                </Card.Title>
                                <Card.Text>
                                    <>
                                        <p>{post.text}</p>
                                        <p></p>
                                    </>
                                </Card.Text>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <hr/>
                            <Row>
                                <Col xs={3} className="justify-content-center d-flex comment-icon" onClick={toggleLiked}>
                                    {liked?<div><BsFillHandThumbsUpFill className="align-self-center"/>Like</div>:<div><BsHandThumbsUp className="align-self-center"/>Like</div>}
                                </Col>
                                <Col xs={3} className="justify-content-center d-flex comment-icon">
                                    <MdOutlineInsertComment className="align-self-center"/> Comment
                                </Col>
                                <Col xs={3} className="justify-content-center d-flex comment-icon">
                                    <BiRepost className="align-self-center"/> Repost
                                </Col>
                                <Col xs={3} className="justify-content-center d-flex comment-icon">
                                    <IoIosSend className="align-self-center"/> Send
                                </Col>
                            </Row>
                        </Card.Body>
                        {/* <Card.Img src={post.image}/>  */}
                        
                    </Card>
                );
            })}
        </div>
    );
};

export default Posts;
