import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    white-space: pre-wrap;
`;

export const Line = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: 'Inconsolata', monospace;
`;

export const Tab = styled.span`
    height: 100%;
    width: 60px;
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
`;

export const Image = styled.div`
    width: 150px;
    height: 150px;
    position: relative;
    left: 10%;
`;

export const Const = styled.span`
    color: #569CCA;
`;

export const ObjectName = styled.span`
    color: #4FC1FF;
`;

export const ObjectKey = styled.span`
    color: #9CDCFE;
`;

export const Type = styled.span`
    color: #4EC9B0;
`;

export const String = styled.span`
    color: #CE8349;
`;


const aboutMe = {
    image: {

    },
    mySkills: {
        Frontend: []
    }
}