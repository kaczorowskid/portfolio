import React, { useContext, forwardRef } from 'react';
import * as styled from './Settings.styled';
import { AppContext } from '../../context/AppContext/AppContext';
import { wallpapers } from '../../wallpapers';
import { motion } from 'framer-motion'
import Navbar from './components/Navbar/Navbar';
import ImageSlider from './components/ImageSlider/ImageSlider';

const Settings = forwardRef<HTMLDivElement, any>((_, ref) => {

    const { checkWallpaper, setCheckWallpaper, setDisplaySettings } = useContext(AppContext);

    return (
        <>
            <styled.Wrapper>
                <styled.Container ref = {ref}>
                    <Navbar appName = 'Settings' setDisplaySettings = {setDisplaySettings} />
                    <styled.PreviewImageContainer>
                        <styled.ImageContainer>
                            <styled.Image src={wallpapers[checkWallpaper]} />
                        </styled.ImageContainer>
                    </styled.PreviewImageContainer>
                    <ImageSlider checkWallpaper = {checkWallpaper} setCheckWallpaper = {setCheckWallpaper} />
                </styled.Container>
            </styled.Wrapper>
        </>
    )
})

export default motion(Settings, {forwardMotionProps: true})