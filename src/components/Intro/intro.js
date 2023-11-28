import React, { useState, useEffect, useMemo } from "react";
import "./intro.css";
import bg from "../../assets/photo.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hire.png";

const Intro = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const texts = useMemo(
    () => [
      "IT Consultation",
      "Software Development",
      "IT Automation",
      "IT Solutions",
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < texts[textIndex].length) {
        setCharIndex(charIndex + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCharIndex(0);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, textIndex, texts]);
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Welcome to</span>
        <span className="introText">
          <span className="introName">Nalatech.id</span>
          <br />
          {texts[textIndex].slice(0, charIndex) +
            (charIndex < texts[textIndex].length ? "\u00A0" : "")}
        </span>
        <p className="introPara">
          Our vision is to pioneer innovation in Information Technology services
          , <br />
          drive the era of digital transformation, and provide cutting-edge
          solutions <br />
          to support global business growth.
        </p>
        <Link>
          <Link to="contact" smooth={true} offset={-75} duration={500}>
            <button className="btn">
              <img src={btnImg} alt="Hire Me" className="btnImg" />
              Interested in Our Services?
            </button>
          </Link>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
