import React from 'react';
import {
  Container,
  CheckImageWrapper,
  ImagesCheckContainer,
  Image
} from './ImageSlider.styled';

interface Props {
  wallpapers: string[];
  checkWallpaper: number;
  setCheckWallpaper: (val: number) => void;
}

const ImageSlider: React.FC<Props> = ({ wallpapers, checkWallpaper, setCheckWallpaper }) => {

  const handleCheckImage = (imageId: number) => {
    setCheckWallpaper(imageId);
    localStorage.setItem('checkImage', `${imageId}`);
  }

  return (
    <Container>
      <ImagesCheckContainer>
        {wallpapers.map((data, i) => (
          <CheckImageWrapper key={i} onClick={() => handleCheckImage(i)} checkImage={checkWallpaper + 1} >
            <Image src={data} />
          </CheckImageWrapper>
        ))}
      </ImagesCheckContainer>
    </Container>
  )
}

export default ImageSlider;