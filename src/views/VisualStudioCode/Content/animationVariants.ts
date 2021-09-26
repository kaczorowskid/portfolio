import { AnimationProps } from "framer-motion";

export const avatarVariants: AnimationProps = {
    variants: {
        hiddden: {
            rotate: 0
        },
        visible: {
            rotate: 360,
            transition: {
                duration: 1.5
            }
        }
    }
}