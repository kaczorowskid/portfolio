import { motion, AnimationProps } from 'framer-motion'

export const pathVariants: AnimationProps = {
    variants: {
        hidden: {
            pathLength: 0,
        },
        visible: {
            pathLength: 1,
            stroke: 'green',
            strokeWidth: 3,
            transition: {
                duration: 3,
            }
        }
    }
};

export const darkVariants: AnimationProps = {
    variants: {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 2
            }
        }
    }
}