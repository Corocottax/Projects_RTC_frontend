import { useCarousel } from "../../utils/customHooks/useCarousel";
import "./Carousel.css";

const Carousel = ({ imgs = [] }) => {
  const { move, animate, showCarousel } = useCarousel(imgs);

  return (
    <div className="carousel">
      {imgs.map((img, index) => {
        return (
          <div
            key={img}
            className={index === animate ? "animate" : ""}
            style={{
              zIndex: `${showCarousel[index]}`,
              transform: `rotate(${
                index % 2 === 0 ? index * 4.234 : index * -4.234
              }deg)`,
            }}
            onClick={() => move(index)}
          >
            {console.log(showCarousel)}
            {console.log(showCarousel[index])}
            <img src={img} />
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
