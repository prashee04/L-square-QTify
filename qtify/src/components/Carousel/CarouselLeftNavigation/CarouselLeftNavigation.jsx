import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(() =>
    swiper ? swiper.isBeginning : true
  );

  useEffect(() => {
    if (!swiper) return;

    const handler = () => setIsBeginning(swiper.isBeginning);
    swiper.on("slideChange", handler);

    // sync initial state
    setIsBeginning(swiper.isBeginning);

    return () => {
      try {
        swiper.off("slideChange", handler);
      } catch (e) {
        // defensive
      }
    };
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && (
        <LeftArrow
          data-testid="carousel-prev"
          onClick={() => swiper.slidePrev()}
        />
      )}
    </div>
  );
}
