import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(() => (swiper ? swiper.isEnd : false));

  useEffect(() => {
    if (!swiper) return;

    const handler = () => setIsEnd(swiper.isEnd);
    swiper.on("slideChange", handler);

    // sync initial state
    setIsEnd(swiper.isEnd);

    return () => {
      try {
        swiper.off("slideChange", handler);
      } catch (e) {
        // defensive: some Swiper versions may not have off
      }
    };
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}
