import { fetchPosts } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
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
  likes: User[];
}
interface Comment {
  _id: string;
  comment: string;
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

interface Social {
  pending: string[];
  sent: string[];
  friends: string[];
}

const Posts = () => {
  const dispatch = useAppDispatch();
  let posts = useAppSelector((state) => state.posts.postList);
  let postsReverse = [...posts].reverse();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      {posts.length > 0 ? (
        postsReverse.map((post: PostInterface, i: number) => {
          return <Post post={post} key={i} />;
        })
      ) : (
        <p>No Posts yet!</p>
      )}
    </div>
  );
};

export default Posts;
