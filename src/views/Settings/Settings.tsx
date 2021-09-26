import React, { useContext, forwardRef } from 'react';
import * as styled from './Settings.styled';
import AppContext from '../../context/AppContext';
import { wallpapers } from '../../wallpapers';
import { motion } from 'framer-motion'

const Settings = forwardRef<HTMLDivElement, any>((_, ref) => {

    const { checkWallpaper, setCheckWallpaper, setDisplaySettings } = useContext(AppContext);

    const handleCheckImage = (imageId: number) => {
        setCheckWallpaper(imageId);
        localStorage.setItem('checkImage', `${imageId}`);
    }

    return (
        <>
            <styled.Wrapper>
                <styled.Container ref = {ref}>
                    <styled.Navbar>
                        <styled.Header>
                            Settings
                        </styled.Header>
                        <styled.IconContainer>
                            <styled.IconWrapper>
                                <styled.MinimalizeIcon />
                            </styled.IconWrapper>
                            <styled.IconWrapper>
                                <styled.MaximalizeIcon />
                            </styled.IconWrapper>
                            <styled.IconWrapper onClick={() => setDisplaySettings(false)} closeIcon={true} >
                                <styled.CloseIcon />
                            </styled.IconWrapper>
                        </styled.IconContainer>
                    </styled.Navbar>
                    <styled.PreviewImageContainer>
                        <styled.ImageContainer>
                            <styled.Image src={wallpapers[checkWallpaper]} />
                        </styled.ImageContainer>
                    </styled.PreviewImageContainer>
                    <styled.ImagesCheckContainerWrapper>
                        <styled.ImagesCheckContainer>
                            {wallpapers.map((data, i) => (
                                <styled.CheckImageWrapper key={i} onClick={() => handleCheckImage(i)} checkImage={checkWallpaper + 1} >
                                    <styled.Image src={data} />
                                </styled.CheckImageWrapper>
                            ))}
                        </styled.ImagesCheckContainer>
                    </styled.ImagesCheckContainerWrapper>
                </styled.Container>
            </styled.Wrapper>
        </>
    )
})

export default motion(Settings, {forwardMotionProps: true})