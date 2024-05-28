import { useState } from "react";

export const useCarousel = (imgs = []) => {
  const [showCarousel, setShowCarousel] = useState(
    imgs.map((e, index) => index).reverse()
  );

  const [animate, setAnimate] = useState();

  const move = (index) => {
    setAnimate(index);
    setTimeout(() => {
      setShowCarousel(
        showCarousel.map((n) =>
          n === showCarousel.length - 1 ? n + 1 - showCarousel.length : n + 1
        )
      );
    }, 300);
  };

  return { move, showCarousel, animate };
};
