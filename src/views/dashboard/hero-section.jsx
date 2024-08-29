import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import HeroImg from "../../../public/hero-img.png";

const HeroSection = () => {
  return (
    <div className="hero-bg">
      <div className="custom-container">
        <div className="hero-section">
          <div>
            <h1 className="hero-heading">
              Build Your Landing Page With
              <span className="typewriter-animation span-text">
                Bootslander
              </span>
            </h1>
            <p className="hero-para">
              We are team of talented designers making websites
              <br className="hbr" />
              with Bootstrap
            </p>
            <div className="hero-section-btn">
              <button className="hero-btn-started">Get Started</button>
              <button className="btn-watch-video">
                <Icon icon="gridicons:play" className="hero-watch-icon" />
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          <div>
            <Image
              className="hero-img"
              src={HeroImg}
              alt="Hero image"
              height={400}
              width={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
