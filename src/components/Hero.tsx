import { motion } from "framer-motion";
import Image from "next/image";
import Email from "./Email";
import Github from "./Github";
import Noyan from "./Noyan";

export default function Hero() {
  return (
    <motion.div
      className="flex min-h-screen items-center justify-center bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      css = {{
      position:"relative",
      top: "320px",


      
      }}
    >
      <div className="hero-content mx-72 flex flex-row items-center justify-center space-x-8 space-y-8">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Image
            src="/1679981229132.jpeg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="me"
            width={500}
            height={500}
          />
        </motion.div>

        <div className="">
          <motion.h1
            className="text-5xl font-bold"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            hi <br></br> i&apos;m{" "}
          </motion.h1>
          <Noyan />
          <motion.p
            className="py-4 text-xl"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            i&apos;m a recent Computer Engineering graduate and a junior
            full-stack developer.
          </motion.p>

          <Email />

          <Github />
        </div>
      </div>
    </motion.div>
  );
}
