import React from "react";
import styles from "./IntroCard.module.css";
import LazyImage from "./LazyImage";

function IntroCard({ introCardData }) {
  if (!introCardData) {
    return null;
  }

  return (
    <div className={styles.introCard} id="ourStory">
      <div className={styles.innerIntroCard}>
        <h2>{introCardData.title}</h2>
        <p>{introCardData.subtitle}</p>
      </div>
      <div className={styles.innerIntroCard}>
        <LazyImage src={introCardData.image} alt="Imagen de la tarjeta" />
        <span className={styles.pill}>{introCardData.pill}</span>
      </div>
    </div>
  );
}

export default IntroCard;
