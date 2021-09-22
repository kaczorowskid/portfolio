import React, { useEffect, useState } from 'react'
import VisitingCard from '../../components/VisitingCard/VisitingCard'
import { cardVariants } from './cardsAnimationVariants'

const Cards: React.FC = () => {
    return (
        <>
            <VisitingCard
                {...cardVariants}
                initial='hidden'
                animate='visible'
                rotate='-6deg'
                content={false}
                moving={false}
                top={6}
                custom={1}
            />
            <VisitingCard
                {...cardVariants}
                initial='hidden'
                animate='visible'
                rotate='-5deg'
                content={false}
                moving={false}
                top={5}
                custom={1.5}
            />
            <VisitingCard
                {...cardVariants}
                initial='hidden'
                animate='visible'
                rotate='-4deg'
                content={false}
                moving={false}
                top={4}
                custom={2}
            />
            <VisitingCard
                {...cardVariants}
                initial='hidden'
                animate='visible'
                rotate='-3deg'
                content={false}
                moving={false}
                top={3}
                custom={2.5}
            />
            <VisitingCard
                {...cardVariants}
                initial='hidden'
                animate='visible'
                rotate='-2deg'
                content={false}
                moving={false}
                top={2}
                custom={3}
            />
            <VisitingCard
                {...cardVariants}
                initial='hidden'
                animate='visible'
                rotate='-1deg'
                content={false}
                moving={false}
                top={1}
                custom={3.5}
            />
            <VisitingCard
                {...cardVariants}
                initial='hidden'
                animate='visible'
                rotate='0deg'
                content={true}
                moving={true}
                top={0}
                custom={4}
            />
        </>
    )
}

export default Cards