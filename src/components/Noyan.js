import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "../pages/Shapes";
import { transition } from "../pages/settings";
import useMeasure from "react-use-measure";

export default function Noyan() {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <MotionConfig transition={transition}>
      <motion.button
        ref={ref}
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 0.5 },
          hover: { scale: 0.8 },
          press: { scale: 0.6 },
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientY - bounds.y - bounds.height / 2);
        }}
        style={{
          appearance: "none",
          border: "none",
          cursor: "pointer",
          color: "#fff",
          borderRadius: "60px",
          outline: "none",
          margin: "0",
          padding: "0", // Adjusted padding
          fontFamily: "Poppins",
          fontSize: "104px", // Adjusted font size
          fontWeight: 600,
          lineHeight: "1",
          letterSpacing: "-1px",
          display: "block", // Updated display property
          position: "relative",
          left: "40px",
          top: "-90px",
        }}
      >
        {/* Rest of the code */}
      </motion.button>
    </MotionConfig>
  );
}
