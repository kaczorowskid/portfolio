import { AnimationProps } from 'framer-motion'

export const avatarVariants: AnimationProps = {
    variants: {
        hiddden: {
            rotate: 0
        },
        visible: (i: number) =>  ({
            rotate: 360,
            transition: { 
                delay: i,
                duration: 1.5
            }
        })
    }
}

export const itemVariants: AnimationProps = {
    variants: {
        hidden: {
            left: 1000
        },
        visible: {
            left: -30,
            transition: {
                duration: 1
            }
        }
    }
}

export const pathVariants: AnimationProps = {
    variants: {
        hidden: {
            pathLength: 0,
        },
        visible: {
            pathLength: 1,
            stroke: 'white',
            strokeWidth: 1,
            transition: {
                duration: 3,
            }
        }
    }
};