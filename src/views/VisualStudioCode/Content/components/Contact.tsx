import React from 'react'
import { contact } from '../config';
import * as styled from '../style';
import { tab } from '../helper/tab';

const Contact: React.FC = () => {

    return (
        <>
            <styled.Container>
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