import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome home!</h1>
      <Link to="/about">Home</Link>
    </div>
  );
};

export default Home;
