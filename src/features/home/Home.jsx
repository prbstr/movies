import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchHomePageDataAsync } from "./Actions";

const Home = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector(state => state.home);

  useEffect(() => {
    dispatch(fetchHomePageDataAsync())

  }, []);
  return <div>Hello from home</div>;
};

export default Home;
