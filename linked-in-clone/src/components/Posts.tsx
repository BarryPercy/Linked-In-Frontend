import { fetchPosts} from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
const Posts = () => {
    const dispatch = useAppDispatch();
    let posts = useAppSelector((state) => state.exps.expList);

    useEffect(() => {
        dispatch(fetchPosts());
      }, []);
    return (
        <></>
    );
};

export default Posts;
