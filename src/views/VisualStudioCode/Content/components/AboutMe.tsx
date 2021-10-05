import React, { useEffect, useRef } from 'react'
import * as styled from '../style';
import face from '../../../../assets/img/face.png'
import { motion } from 'framer-motion';
import { avatarVariants } from '../animationVariants';
import { skills } from '../config';
import { tab } from '../helper/tab';
import { useClientHeight } from '../../../../hooks/useClientHeight';

const AboutMe: React.FC = () => {

    const { frontend, backend, other } = skills;

    const { setClientHeight } = useClientHeight();

    const containerRef = useRef<HTMLDivElement>(null)

    const enterSkills = (dataSkill: Array<string>): Array<JSX.Element> => {
        return (
            dataSkill.map((skill, i) => (
                <styled.Line key={i}>
                    {tab(3)} <styled.String>'{skill}'</styled.String>,
                </styled.Line>
            ))
        )
    }

    useEffect(() => {
        setClientHeight(containerRef.current?.clientHeight)
    }, [])

    return (
        <>
            <styled.Container ref = {containerRef} >
                <styled.Line>
                    <styled.Const>const </styled.Const>
                    <styled.ObjectName>aboutMe: <styled.Type >IaboutMeData</styled.Type> </styled.ObjectName>{`= {`}
                </styled.Line>
                <styled.Line>
                    {tab(1)}
                    <styled.ObjectKey>name: </styled.ObjectKey>
                    <styled.String>'Damian'</styled.String>,
                </styled.Line>
                <styled.Line>
                    {tab(1)} <styled.ObjectKey>image: </styled.ObjectKey>{'{'}
                </styled.Line>
                <styled.ImageContainer>
                    <styled.AvatarContainer>
                        <motion.img
                            {...avatarVariants}
                            initial='hiddden'
                            animate="visible"
                            style={{ width: '100%', height: '100%' }} src={face} alt="" />
                    </styled.AvatarContainer>
                </styled.ImageContainer>
                <styled.Line>
                    {tab(1)}{'},'}
                </styled.Line>
                <styled.Line>
                    {tab(1)} <styled.ObjectKey >aboutMe: </styled.ObjectKey>{'['}
                </styled.Line>
                <styled.Line>
                    {tab(2)} <styled.String >'Hello 👋 I'm Damian, a beginner frontend developer 👨🏽‍💻' </styled.String>
                </styled.Line>
                <styled.Line>
                    {tab(1)}{'],'}
                </styled.Line>
                <styled.Line>
                    {tab(1)} <styled.ObjectKey >mySkills: </styled.ObjectKey>{'{'}
                </styled.Line>
                <styled.Line>
                    {tab(2)} <styled.ObjectKey>Frontend: </styled.ObjectKey>{'['}
                </styled.Line>
                {enterSkills(frontend)}
                <styled.Line>
                    {tab(2)}{'],'}
                </styled.Line>
                <styled.Line>
                    {tab(2)} <styled.ObjectKey>Backend: </styled.ObjectKey>{'['}
                </styled.Line>
                {enterSkills(backend)}
                <styled.Line>
                    {tab(2)}{'],'}
                </styled.Line>
                <styled.Line>
                    {tab(2)} <styled.ObjectKey>Other: </styled.ObjectKey>{'['}
                </styled.Line>
                {enterSkills(other)}
                <styled.Line>
                    {tab(2)}{'],'}
                </styled.Line>
                <styled.Line>
                    {tab(1)}{'},'}
                </styled.Line>
                <styled.Line>
                    {'}'}
                </styled.Line>
            </styled.Container>
        </>
    )
}

export default AboutMe;