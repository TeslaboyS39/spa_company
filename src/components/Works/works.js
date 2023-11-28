import React, { useState, useEffect } from "react";
import "./works.css";
import Portfolio1 from "../../assets/web1.png";
import Portfolio2 from "../../assets/web2.png";
import Portfolio3 from "../../assets/web3.png";
import Portfolio4 from "../../assets/web4.png";
import Portfolio5 from "../../assets/web5.png";
import Portfolio6 from "../../assets/web6.png";
import Portfolio7 from "../../assets/web7.png";
import Portfolio8 from "../../assets/web8.png";
import Portfolio9 from "../../assets/web9.png";
import Portfolio10 from "../../assets/web10.png";
import Portfolio11 from "../../assets/web11.png";

const Works = () => {
  const initialPortfolioCount = 6;
  const totalPortfolios = 11;

  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(initialPortfolioCount);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    setLoading(true);

    // Simulate a delay for loading effect (you can replace this with your API call)
    setTimeout(() => {
      const newStartIdx = startIdx + initialPortfolioCount;
      const newEndIdx = Math.min(
        endIdx + initialPortfolioCount,
        totalPortfolios
      );

      setStartIdx(newStartIdx);
      setEndIdx(newEndIdx);
      setLoading(false);
    }, 1000);
  };

  const handlePrev = () => {
    setLoading(true);

    // Simulate a delay for loading effect (you can replace this with your API call)
    setTimeout(() => {
      const newStartIdx = Math.max(startIdx - initialPortfolioCount, 0);
      const newEndIdx = startIdx;

      setStartIdx(newStartIdx);
      setEndIdx(newEndIdx);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setLoading(false);
  }, [startIdx, endIdx]);

  const portfolios = [
    Portfolio1,
    Portfolio2,
    Portfolio3,
    Portfolio4,
    Portfolio5,
    Portfolio6,
    Portfolio7,
    Portfolio8,
    Portfolio9,
    Portfolio10,
    Portfolio11,
  ];

  return (
    <section id="works">
      <h2 className="worksTitle">Our Works</h2>
      <span className="worksDesc">
        Our portfolio proudly reflects our dedication and expertise, showcasing
        a diverse range of projects that embody innovation, quality, and client
        satisfaction.
      </span>
      <div className="worksImgs">
        {portfolios.slice(startIdx, endIdx).map((portfolio, index) => (
          <img
            key={index}
            src={portfolio}
            alt={`Portfolio ${startIdx + index + 1}`}
            className="worksImg"
          />
        ))}
      </div>
      <div>
        {startIdx > 0 && (
          <button className="workBtn" onClick={handlePrev} disabled={loading}>
            {loading ? "Loading..." : "Previous"}
          </button>
        )}
        {endIdx < totalPortfolios && (
          <button className="workBtn" onClick={handleNext} disabled={loading}>
            {loading ? "Loading..." : "Next"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Works;
