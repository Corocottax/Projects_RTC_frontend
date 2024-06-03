import { useCarousel } from "../../utils/customHooks/useCarousel";
import "./Carousel.css";

const Carousel = ({ imgs = [], w, h }) => {
  const { move, animate, showCarousel } = useCarousel(imgs);

  return (
    <div className="carousel" style={{ width: w, height: h }}>
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
              width: w,
              height: h,
            }}
            onClick={() => move(index)}
          >
            <img src={img} />
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
