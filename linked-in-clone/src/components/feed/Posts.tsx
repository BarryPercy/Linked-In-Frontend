import { fetchPosts} from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { Card, Image, Button } from 'react-bootstrap'
import parseISO from 'date-fns/parseISO'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

interface PostsInterface{
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
    let postsReverse = [...posts].reverse();
    let slicedPostsReverse = postsReverse.slice(0,20);

    const formatDate=(date: string)=>{
        const postDate = parseISO(date)
        const formatted = formatDistanceToNowStrict(postDate)
        return(
            {formatted}
        )
    }
    useEffect(() => {
        dispatch(fetchPosts());
      }, []);
    return (
        <div>
            {slicedPostsReverse.map((post: PostsInterface) => {
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
                        
                    </Card>
                );
            })}
        </div>
    );
};

export default Posts;
