import { useCallback } from "react";
import "./Stars.css";

const Stars = ({ averageRating, visible }) => {

  const printStars = useCallback(() => {
    const arrayStars = [];
    for (let i = 0; i < 5; i++) {
      let percentaje = 100;

      if (Math.floor(averageRating) === i) {
        percentaje =
          parseInt(averageRating.toFixed(2).toString().split(".")[1][0]) * 10;
      } else if (averageRating < i) {
        percentaje = 0;
      }

      console.log(averageRating);
      console.log(Math.floor(averageRating))
      console.log(percentaje);

      arrayStars.push(
        <div
          key={i}
          className="star"
          style={{
            background:
              percentaje > 0
                ? `linear-gradient(90deg, rgba(27, 27, 27,1) ${percentaje}%, var(--rtc-color-100) ${percentaje}%)`
                : `var(--rtc-color-100)`,
          }}
        ></div>
      );
    }
    return arrayStars;
  }, []);

  return (
    <div className="stars" style={{ height: visible ? "30px" : "0px" }}>
      {printStars()}
    </div>
  );
};

export default Stars;
