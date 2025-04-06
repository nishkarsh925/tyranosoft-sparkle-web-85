
"use client";
import { useMotionValue, useMotionTemplate, animate, motion, SpringOptions, MotionValue } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
};

export function Spotlight({
  className,
  size = 500,
  springOptions = {
    stiffness: 400,
    damping: 30
  }
}: SpotlightProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const backgroundImage = useMotionTemplate`radial-gradient(${size}px circle at ${mouseX}px ${mouseY}px, ${className ? "" : "rgba(255,255,255,0.15)"}, transparent 80%)`;

  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute inset-0 z-30 transition duration-300",
        className
      )}
      style={{
        background: backgroundImage as unknown as string,
      }}
      onMouseMove={(e) => {
        animate(mouseX, e.clientX - e.currentTarget.offsetLeft, springOptions);
        animate(mouseY, e.clientY - e.currentTarget.offsetTop, springOptions);
      }}
    />
  );
}
