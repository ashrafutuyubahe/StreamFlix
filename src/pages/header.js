import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="navContent">
        <Link to="/">
          <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt="IMDB Logo"
            
          />
        </Link>
        <Link to="/home" style={{textDecoration:"none"}}><span>Home</span></Link>
        <Link to="/top rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
        <Link to="/popular"style={{textDecoration:"none"}}><span>Popular</span></Link>
        
      </div>
    </div>
  );
}
