import { useSpring, useTransform } from "framer-motion";

/**
 * @param {import("framer-motion").MotionValue<any>} value
 * @param {import("framer-motion").SpringOptions | undefined} springOptions
 * @param {{ (v: any): number; (v: any): number; (x: any): number; (y: any): number; (input: any): any; }} transformer
 */
export function useSmoothTransform(value, springOptions, transformer) {
  return useSpring(useTransform(value, transformer), springOptions);
}
