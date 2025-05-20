import React from 'react'
import "./Hero.css";
import heroImage from "../../../assets/images/hero-image.png";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero_content text-white">
          <div className="hero_content_title font-bold">Let's Explore The World Together</div>
          <div className="hero_content_text">Discover the uniqueness of every nation</div>
          <button className="hero_content_button">Start</button>
        </div>
        <div className="hero_image-container">
          <img className="hero_image" src={heroImage} />
        </div>
      </div>
    </>
  )
}
