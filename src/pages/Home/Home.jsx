import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import heroImage from "../../assets/images/hero-image.png";
import "./Home.css";


export default function Home() {
  const theme = useSelector((state) => state.themeReducer.theme);

  return (
    <>
      <div className={`hero ${theme}`}>
        <div className={`hero_content ${theme}`}>
          <div className="hero_content_title">Let's Explore The World Together</div>
          <div className="hero_content_text">Discover the uniqueness of every nation</div>
          <div><Link className={`hero_content_button ${theme}`} to="/countries">Start</Link></div>
        </div>
        <div className="hero_image-container">
          <img className="hero_image" src={heroImage} />
        </div>
      </div>
    </>
  )
}
