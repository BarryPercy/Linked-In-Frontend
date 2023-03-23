import { fetchPosts, getComments, postComment, postLikes } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { Card, Button, Row, Col, Modal, Form, Image } from "react-bootstrap";
import parseISO from "date-fns/parseISO";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { BiCommentDetail, BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { BsPencil } from "react-icons/bs";
import { deletePost } from "../../redux/actions";
import { editPost } from "../../redux/actions";
import { AiOutlineLike } from "react-icons/ai";
import Post from "./Post";

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
  let postsReverse = [...posts].reverse()
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return(
    <div>
      {posts.length>0? postsReverse.map((post: PostInterface) => {
        return(
            <Post post={post}/>

        )
      }):<p>No Posts yet!</p>}
    </div>
  );
};

export default Posts;
