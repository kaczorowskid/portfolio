import { useContext, forwardRef } from 'react';
import { motion } from 'framer-motion';
import {
  Wrapper,
  Container,
  PreviewImageContainer,
  ImageContainer,
  Image
} from './Settings.styled';
import { AppContext } from '@context';
import { wallpapers } from '@styles';
import { Navbar, ImageSlider } from '@components';

const Settings = forwardRef<HTMLDivElement, any>((_, ref) => {

  const { checkWallpaper, setCheckWallpaper, setDisplaySettings } = useContext(AppContext);

  return (
    <Wrapper>
      <Container ref={ref}>
        <Navbar appName='Settings' setDisplay={setDisplaySettings} />
        <PreviewImageContainer>
          <ImageContainer>
            <Image src={wallpapers[checkWallpaper]} />
          </ImageContainer>
        </PreviewImageContainer>
        <ImageSlider wallpapers={wallpapers} checkWallpaper={checkWallpaper} setCheckWallpaper={setCheckWallpaper} />
      </Container>
    </Wrapper>
  )
})

export default motion(Settings, { forwardMotionProps: true })