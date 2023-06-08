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
          "--purple": "#db07d1",
          "--pink": "#f2056f",
          "--blue": "#61dafb",
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
        <motion.div
          className="shapes"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          style={{
            position: "absolute",
            top: "-1px",
            left: "-1px",
            right: "-1px",
            bottom: "-1px",
          }}
        >
          <div
            className="pink blush"
            style={{
              position: "absolute",
              bottom: "-15px",
              width: "100px",
              height: "30px",
              filter: "blur(20px)",
              right: "20px",
              background: "var(--purple)",
            }}
          />
          <div
            className="blue blush"
            style={{
              position: "absolute",
              bottom: "-15px",
              width: "100px",
              height: "30px",
              filter: "blur(20px)",
              left: "20px",
              background: "var(--blue)",
            }}
          />
          <div
            className="container"
            style={{
              position: "absolute",
              top: "-100px",
              bottom: "-100px",
              left: "-50px",
              right: "-100px",
              width: "calc(100% + 200px)",
              pointerEvents: "none",
            }}
          >
            <Suspense fallback={null}>
              <Shapes
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </Suspense>
          </div>
        </motion.div>
        <motion.div
          variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
          className="label"
          style={{
            width: "180px",
            transform: "translateZ(0)",
            fontWeight: 700,
            zIndex: 1,
          }}
        >
          <span className="decoration-6 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent underline decoration-white underline-offset-1">
            noyan
          </span>
        </motion.div>
      </motion.button>
    </MotionConfig>
  );
}
