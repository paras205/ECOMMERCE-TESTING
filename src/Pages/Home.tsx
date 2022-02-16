import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getALlBlogs } from "src/store/actions/blog";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getALlBlogs());
  }, []);
  return <div>Home</div>;
};

export default Home;
