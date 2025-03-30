import React, { useState, useEffect, useRef } from "react";
import styles from "./TimelineCta.module.css";
import LazyImage from "./LazyImage";

function TimelineCta({ timelineData, ctaData }) {
  const [rangeValue, setRangeValue] = useState(0);
  const [percentageLabelPosition, setPercentageLabelPosition] = useState(0);
  const rangeRef = useRef(null);
  const percentageLabelRef = useRef(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (timelineData && timelineData.initial_item && rangeRef.current) {
      rangeRef.current.value = timelineData.initial_item.data;
      setRangeValue(timelineData.initial_item.data);
    }
  }, [timelineData]);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  useEffect(() => {
    if (rangeRef.current && percentageLabelRef.current) {
      const rangeRect = rangeRef.current.getBoundingClientRect();
      const labelWidth = percentageLabelRef.current.offsetWidth;
      const dotWidth = 20;

      const position =
        ((rangeValue - timelineData.initial_item.data) /
          (timelineData.final_item.data - timelineData.initial_item.data)) *
          (rangeRect.width - dotWidth) +
        dotWidth / 2 -
        labelWidth / 2;

      setPercentageLabelPosition(position);

      // Percentage calc
      const calculatedPercentage =
        ((rangeValue - timelineData.initial_item.data) /
          (timelineData.final_item.data - timelineData.initial_item.data)) *
        100;
      setPercentage(calculatedPercentage);
    }
  }, [rangeValue, timelineData]);

  if (!timelineData || !ctaData) {
    return null;
  }

  return (
    <div className={styles.timelineCta}>
      <div className={styles.timeline}>
        <h2>{timelineData.title}</h2>
        <div className={styles.items}>
          <div className={styles.valuesItems}>
            <span>{timelineData.initial_item.label}</span>
            <span>{timelineData.final_item.label}</span>
          </div>
          <div className={styles.rangeContainer}>
            <input
              type="range"
              min={timelineData.initial_item.data}
              max={timelineData.final_item.data}
              value={rangeValue}
              onChange={handleRangeChange}
              ref={rangeRef}
            />
            <p
              className={styles.percentageLabel}
              ref={percentageLabelRef}
              style={{ left: `${percentageLabelPosition}px` }}
            >
              {Math.round(percentage)}%{" "}
            </p>
          </div>
          <div className={styles.valuesItems}>
            <p>{timelineData.initial_item.data}</p>
            <p>{timelineData.final_item.data}</p>
          </div>
        </div>
      </div>
      <div className={styles.cta} id="store">
        <div>
          <h2>{ctaData.title}</h2>
          <p>{ctaData.subtitle}</p>
        </div>
        <div>
          <LazyImage src={ctaData.image_1} alt="Imagen 1" />
          <LazyImage src={ctaData.image_2} alt="Imagen 2" />
        </div>
        <span className={styles.pill}>{ctaData.pill}</span>
      </div>
    </div>
  );
}

export default TimelineCta;
