"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span className="font-extrabold uppercase text-[5vw] text-white whitespace-nowrap">
          {children}{" "}
        </span>
        <span className="font-extrabold uppercase text-[5vw] text-white whitespace-nowrap">
          {children}{" "}
        </span>
        <span className="font-extrabold uppercase text-[5vw] text-white whitespace-nowrap">
          {children}{" "}
        </span>
        <span className="font-extrabold uppercase text-[5vw] text-white whitespace-nowrap">
          {children}{" "}
        </span>
      </motion.div>
    </div>
  );
}

export default function TextScroll() {
  return (
    <section className="w-full overflow-hidden">
      <div className="border-t border-b border-gray-600 py-[4vmin]">
        <ParallaxText baseVelocity={-4}>Choose Labverse</ParallaxText>
      </div>
      <div className="border-b border-gray-600 py-[4vmin]">
        <ParallaxText baseVelocity={4}>Sign up today</ParallaxText>
      </div>
    </section>
  );
}
