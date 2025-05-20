import React from 'react'
import "./Home.css";
import heroImage from "../../../assets/images/hero-image.png";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero_content text-white">
          <div className="hero_content_title font-bold">Let's Explore The World Together</div>
          <div className="hero_content_text">Discover the uniqueness of every nation</div>
          <div><Link className="hero_content_button" to="/countries">Start</Link></div>
        </div>
        <div className="hero_image-container">
          <img className="hero_image" src={heroImage} />
        </div>
      </div>
    </>
  )
}
