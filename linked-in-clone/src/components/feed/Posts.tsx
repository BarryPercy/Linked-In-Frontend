import { fetchPosts} from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { Card, Image, Button } from 'react-bootstrap'

interface PostsInterface{
    _id: string;
    text: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
const Posts = () => {
    const dispatch = useAppDispatch();
    let posts = useAppSelector((state) => state.posts.postList);

    useEffect(() => {
        dispatch(fetchPosts());
      }, []);
    return (
        <div className="posts">
            {posts.map((post: PostsInterface) => {
                return (
                    <Card key={post._id}>
                        <Card.Body className="ml-2">
                            <Card.Title>
                            </Card.Title>
                            <Card.Text>{post.text}</Card.Text>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};

export default Posts;
