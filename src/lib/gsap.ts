import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Set defaults
gsap.config({
  nullTargetWarn: false,
});

export { gsap, ScrollTrigger };
export default gsap;
