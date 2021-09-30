import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { contact } from '../config';
import * as styled from '../style';
import { tab } from '../helper/tab';

interface Props {
    getHeightContainer: Dispatch<SetStateAction<number | any>>
}

const Contact: React.FC<Props> = ({ getHeightContainer }) => {

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        getHeightContainer(containerRef.current?.clientHeight)
    }, [])

    return (
        <>
            <styled.Container ref={containerRef} >
                <styled.Line>
                    <styled.Const>const </styled.Const>
                    <styled.ObjectName>contact: <styled.Type>Icontact</styled.Type> </styled.ObjectName>{'= {'}
                </styled.Line>
                {Object.entries(contact).map(([k, v], i) => (
                    <styled.Line key={i}>
                        {tab(1)}<styled.ObjectKey>{k}: </styled.ObjectKey>
                        <styled.String>'{v}'</styled.String>
                    </styled.Line>
                ))}
                <styled.Line>
                    {'}'}
                </styled.Line>
            </styled.Container>
        </>
    )
}

export default Contact;