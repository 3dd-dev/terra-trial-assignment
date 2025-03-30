import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import LazyImage from "./LazyImage";

function Hero({ heroData }) {
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("visited");
    if (hasVisited) {
      setVisited(true);
    } else {
      setTimeout(() => {
        localStorage.setItem("visited", "true");
      }, 0);
    }
  }, []);

  if (!heroData) {
    return null;
  }

  const linkClass = styles.heroLink;
  const linkStyle = {
    backgroundColor: visited ? "#0F0F0F" : undefined,
  };

  return (
    <div className={styles.hero}>
      <h1>{heroData.title.first_time_accessing}</h1>
      <p>{heroData.subtitle}</p>
      <a href={heroData.button_link} className={linkClass} style={linkStyle}>
        {visited
          ? heroData.button_label.second_time_accessing
          : heroData.button_label.first_time_accessing}
      </a>
      <LazyImage
        className={styles.bghero}
        src={heroData.bg_image}
        alt="Imagen de fondo"
      />
      <LazyImage
        className={styles.heroshape1}
        src={heroData.shapes.shape_1}
        alt="Forma 1"
      />
      <LazyImage
        className={styles.heroshape2}
        src={heroData.shapes.shape_2}
        alt="Forma 2"
      />
    </div>
  );
}

export default Hero;
