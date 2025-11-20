import React, { useContext } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Contexts/User";

const Home = () => {
  const nav = useNavigate();
  const viewPage = () => {
    nav("/view");
  };

  const user = useContext(UserContext);

  return (
    <div className="homeBody">
      <header>
        <h1>Home page</h1>
      </header>
      <main className="mainbody">
        <p style={{ fontSize: "20px" }}>Hello, {user}</p>
        <button onClick={viewPage}>Click Here!</button>
      </main>
    </div>
  );
};

export default Home;
