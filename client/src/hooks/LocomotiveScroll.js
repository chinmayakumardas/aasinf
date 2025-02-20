"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const useLocomotiveScroll = (options = {}) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const locomotive = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // Smoothness factor (0–1)
      multiplier: 1, // Speed multiplier
      direction: "vertical", // Change to 'horizontal' if needed
      reloadOnContextChange: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
      ...options,
    });

    // Refresh Locomotive Scroll on component mount
    setTimeout(() => locomotive.update(), 100);

    // Cleanup on unmount
    return () => {
      locomotive.destroy();
    };
  }, []);

  return scrollRef;
};
