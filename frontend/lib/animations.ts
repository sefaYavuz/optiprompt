import { type MotionProps } from "framer-motion"

export const FADE_IN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.5 } },
}

export const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.5 } },
}

export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.5 } },
}

export const STAGGER_ANIMATION_PROPS: MotionProps = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-100px" },
  variants: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  },
}
