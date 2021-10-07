import React from 'react';
import { wallpapers } from '../../../../wallpapers';
import * as styled from './ImageSlider.styled';

interface Props {
    checkWallpaper: number
    setCheckWallpaper: (val: number) => void
}

const ImageSlider: React.FC<Props> = ({checkWallpaper, setCheckWallpaper}) => {

    const handleCheckImage = (imageId: number) => {
        setCheckWallpaper(imageId);
        localStorage.setItem('checkImage', `${imageId}`);
    }

    return (
        <styled.Container>
            <styled.ImagesCheckContainer>
                {wallpapers.map((data, i) => (
                    <styled.CheckImageWrapper key={i} onClick={() => handleCheckImage(i)} checkImage={checkWallpaper + 1} >
                        <styled.Image src={data} />
                    </styled.CheckImageWrapper>
                ))}
            </styled.ImagesCheckContainer>
        </styled.Container>
    )
}

export default ImageSlider;