import React, { useEffect, useRef } from 'react'
import * as styled from './VisitingCard.styled'
import face from '../../assets/img/face.png';
import qr from '../../assets/img/qr.png';
import { avatarVariants, itemVariants, pathVariants } from './animationVariants';
import { motion } from 'framer-motion'
import Typist from 'react-typist';

interface Props {
    top?: number
    content?: boolean
    moving?: boolean
    rotate?: string
}


const VisitingCard = React.forwardRef<null, Props>(({ rotate = '0', content, top, moving }, ref) => {

    return (
        <div>
            <styled.Container ref={ref} rotate={rotate} top={top}>
                <styled.Grid>
                    <styled.PersonalInfoContainer>
                        <styled.Image
                            src={face}
                            alt=""
                            {...itemVariants}
                            initial='hidden'
                            animate={moving ? 'visible' : 'hidden'}
                        />
                        <styled.Name>
                            <styled.Color color='#23af23' >Damian</styled.Color> Damiankowy
                        </styled.Name>
                    </styled.PersonalInfoContainer>
                    <styled.InfoContainer>
                        <styled.Info
                            borderColor={'#2ebaff'}
                        >
                            <styled.GithubIcon
                                bgColor={'#2ebaff'}
                                {...avatarVariants}
                                custom={5}
                                initial='hidden'
                                animate={moving ? 'visible' : 'hidden'}
                            />
                            {content ? <styled.Data>
                                <Typist>
                                    <Typist.Delay ms={5500} />
                                    <styled.Color color='#2ebaff' >https://</styled.Color>github.com<styled.Color color='#2ebaff' >/sijab</styled.Color>
                                </Typist>
                            </styled.Data> :
                                <styled.Data>
                                    <styled.Color color='#2ebaff' >https://</styled.Color>github.com<styled.Color color='#2ebaff' >/sijab</styled.Color>
                                </styled.Data>
                            }
                        </styled.Info>
                        <styled.Info borderColor={'#ffc458'} >
                            <styled.ProjectsIcon
                                bgColor={'#ffc458'}
                                {...avatarVariants}
                                custom={5.5}
                                initial='hidden'
                                animate={moving ? 'visible' : 'hidden'}
                            />
                            {content ? <styled.Data>
                                <Typist>
                                    <Typist.Delay ms={6000} />
                                    https://<styled.Color color='#ffc458' >linkedin.com</styled.Color>/sijab
                                </Typist>
                            </styled.Data> :
                                <styled.Data>
                                    https://<styled.Color color='#ffc458' >linkedin.com</styled.Color>/sijab
                                </styled.Data>
                            }
                        </styled.Info>
                        <styled.Info borderColor={'#ff859a'} >
                            <styled.LibraryIcon
                                bgColor={'#ff859a'}
                                {...avatarVariants}
                                custom={6}
                                initial='hidden'
                                animate={moving ? 'visible' : 'hidden'}
                            />
                            {content ? <styled.Data>
                                <Typist >
                                    <Typist.Delay ms={6500} />
                                    <styled.Color color='#ff859a' >Check projects</styled.Color>
                                </Typist>
                            </styled.Data> :
                                <styled.Data>
                                    <styled.Color color='#ff859a' >Check projects</styled.Color>
                                </styled.Data>
                            }
                        </styled.Info>
                    </styled.InfoContainer>
                </styled.Grid>
            </styled.Container>
        </div>
    )
})

export default motion(VisitingCard, { forwardMotionProps: true });