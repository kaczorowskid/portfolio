import { AnimationProps } from 'framer-motion'

export const cardVariants: AnimationProps = {
  variants: {
    hidden: {
      left: 3000,
    },
    visible: (delay: number) => ({
      left: window.screen.width / 2,
      transition: {
        delay: delay,
        duration: 1
      }
    })
  }
}