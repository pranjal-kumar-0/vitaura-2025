import React, { useEffect, useRef, useState } from "react";
import { words } from "./data";
import styles from "./Loader.module.scss";
import { introAnimation, collapseWords, progressAnimation } from "./animation";

const Loader = ({ timeline }) => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordGroupsRef = useRef(null);
  const [isAnimationComplete, setAnimationComplete] = useState(false); // Add state

  useEffect(() => {
    if (timeline) {
      timeline
        .add(introAnimation(wordGroupsRef))
        .add(progressAnimation(progressRef, progressNumberRef), 0)
        .add(collapseWords(loaderRef), "-=1")
        .then(() => {
          setAnimationComplete(true); // Set to true when the animation finishes
        });
    }
  }, [timeline]);

  useEffect(() => {
    if (isAnimationComplete) {
      // Fade out and then remove the loader from the DOM
      setTimeout(() => {
        loaderRef.current.style.display = "none";
      }, 1000); // Wait for 1 second for the fade-out to complete
    }
  }, [isAnimationComplete]);

  return (
    <div
      className={`${styles.loader__wrapper} ${
        isAnimationComplete ? styles.loader__fadeOut : ""
      }`} // Apply fade-out class when animation is complete
    >
      <div className={styles.loader__progressWrapper}>
        <div className={styles.loader__progress} ref={progressRef}></div>
        <span className={styles.loader__progressNumber} ref={progressNumberRef}>
          0
        </span>
      </div>
      <div className={styles.loader} ref={loaderRef}>
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div ref={wordGroupsRef} className={styles.loader__wordsGroup}>
            {words.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
