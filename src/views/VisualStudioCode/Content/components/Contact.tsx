import React, { useEffect, useRef } from 'react'
import { contact } from '../config';
import * as styled from '../style';
import { tab } from '../helper/tab';
import { useClientHeight } from '../../../../hooks/useClientHeight';


const Contact: React.FC = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const { setClientHeight } = useClientHeight();

    useEffect(() => {
        setClientHeight(containerRef.current?.clientHeight);
    }, []);


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