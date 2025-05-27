import React from "react";
import styles from "./RatingBar.module.css";

interface RatingBarProps {
  rating: number;
}

const RatingBar: React.FC<RatingBarProps> = ({ rating }) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 10 }, (_, i) => {
        const full = Math.floor(rating);
        const fraction = rating - full;

        const showNumber = i < full;
        const isFilled = i < full;

        return (
          <React.Fragment key={i}>
            <div className={styles.circleWrapper}>
              <div
                className={`${styles.circle} ${isFilled ? styles.filled : ""}`}
              >
                {showNumber ? i + 1 : ""}
              </div>
            </div>

            {i < 9 && (
              <div className={styles.connectorWrapper}>
                <div className={styles.connectorBackground} />
                {i === full - 1 && fraction > 0 && (
                  <div
                    className={styles.connectorFill}
                    style={{
                      width: `${fraction * 100}%`,
                      borderTopRightRadius: fraction < 1 ? "5px" : "0",
                      borderBottomRightRadius: fraction < 1 ? "5px" : "0",
                    }}
                  />
                )}
                {i < full - 1 && (
                  <div
                    className={styles.connectorFill}
                    style={{
                      width: `100%`,
                    }}
                  />
                )}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default RatingBar;
