import React, { useState, useRef, useEffect, MutableRefObject, useContext, forwardRef } from 'react'
import * as styled from './Terminal.styled'
import Parser from 'html-react-parser';
import { commands } from './commands';
import { fetchCat } from '../../helper/fetchCat';
import { config } from './config'
import AppContext from '../../context/AppContext';
import { motion } from 'framer-motion'


const Terminal = forwardRef<HTMLDivElement, any>((_, ref) => {

    const { setDisplayTerminal, setDisplayVSC } = useContext(AppContext)

    const inputRef = useRef() as MutableRefObject<HTMLInputElement>

    const [inputVal, setInputVal] = useState<string>('')
    const [startBlinkCursor, setStartBlinkCursor] = useState<boolean>(false);
    const [output, setOutput] = useState<Array<string>>(['Type --help to show commands'])
    const [actualPath, setActualPath] = useState<string>('~$')
    const [user, setUser] = useState<string>(localStorage.getItem('user') || 'root');

    useEffect(() => {
        const interval = setInterval(() => setStartBlinkCursor(prev => !prev), 500);
        return () => clearInterval(interval)
    }, [])

    const handleOutput = (e: KeyboardEvent) => {
        if (e.which === 13) {
            handleCommands(inputVal);
            setInputVal('')
        }
    }

    const setCommands = (command: string) => {
        setOutput(data => [...data, command]);
    }

    const handleCommands = async (val: string) => {

        const { help, cat, empty, clear, echo, ls, cd, whoami, su, VSCode } = config.command;
        const { homePath, folderPath } = config.path;
        const { links, back } = config.folder;

        const dataInput = val.split(' ');

        switch (dataInput[0]) {
            case help:
                setCommands(commands.help)
                break;
            case cat:
                const catData = await fetchCat();
                setCommands(commands.cat(catData))
                break;
            case empty:
                setCommands(commands.empty)
                break;
            case clear:
                setOutput([]);
                break;
            case echo:
                dataInput.shift();
                setCommands(commands.echo(dataInput.join(' ')))
                break;
            case ls:
                console.log(actualPath)
                setCommands(commands.ls(actualPath))
                break;
            case cd:
                dataInput.shift();
                const shiftData = dataInput.join(' ')
                if (links(shiftData)) setActualPath(folderPath);
                else if (shiftData === back) setActualPath(homePath);
                break;
            case su:
                dataInput.shift();
                const userName = dataInput.join(' ')
                if (!userName) {
                    setUser('root');
                    localStorage.setItem('user', 'root')
                }
                else {
                    setUser(userName);
                    localStorage.setItem('user', userName)
                }
                break;
            case VSCode:
                (actualPath === folderPath) ? setDisplayVSC(true) : setCommands(commands.error(inputVal))
                break;
            case whoami:
                setCommands(commands.whoami)
                break;
            default:
                setCommands(commands.error(inputVal))
                break;
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleOutput);
        return () => document.removeEventListener('keydown', handleOutput)
    }, [inputVal])

    return (
        <>
            <styled.Wrapper  >
                <styled.Container ref={ref} onClick={() => inputRef?.current?.focus()} >
                    <styled.Navbar>
                        <styled.Header>
                            <div style={{ color: 'white' }} >Terminal</div>
                        </styled.Header>
                        <styled.IconContainer>
                            <styled.IconWrapper>
                                <styled.MinimalizeIcon />
                            </styled.IconWrapper>
                            <styled.IconWrapper>
                                <styled.MaximalizeIcon />
                            </styled.IconWrapper>
                            <styled.IconWrapper onClick={() => setDisplayTerminal(false)} closeIcon={true} >
                                <styled.CloseIcon />
                            </styled.IconWrapper>
                        </styled.IconContainer>
                    </styled.Navbar>
                    <styled.OutputContainer>
                        {output.map((val: any, i: any) => <styled.Output key={i} >{Parser(val)}</styled.Output>)}
                    </styled.OutputContainer>
                    <styled.Tilde >~</styled.Tilde>
                    <styled.InputContainer>
                        <styled.InputElement ref={inputRef} onChange={e => setInputVal(e.target.value)} value={inputVal} /><br />
                        <styled.Prompt>{user}@chadOS:&nbsp;<styled.ActualPath>{actualPath}</styled.ActualPath></styled.Prompt>
                        <styled.Input> {inputVal.replace(/ /g, "\u00a0")} </styled.Input>
                        <styled.Cursor blink={startBlinkCursor} />
                    </styled.InputContainer>
                </styled.Container>
            </styled.Wrapper>
        </>
    )
})

export default motion(Terminal, { forwardMotionProps: true })