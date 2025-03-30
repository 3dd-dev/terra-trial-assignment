import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Hero from "./Hero";
import IntroCard from "./IntroCard";
import Blog from "./Blog";
import TimelineCta from "./TimelineCta";
import "./Directions.css";

function Directions() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://tf-frontend.netlify.app/trial"
        );
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="directions-container">
      {data && (
        <div>
          <Navbar navbarData={data.navbar} />
          <Hero heroData={data.hero} />
          <IntroCard introCardData={data.intro_card} />
          <Blog blogData={data.blog} />
          <TimelineCta timelineData={data.timeline} ctaData={data.cta} />
        </div>
      )}
    </div>
  );
}

export default Directions;
