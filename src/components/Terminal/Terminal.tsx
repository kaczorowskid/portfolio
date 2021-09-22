import React, { useState, useRef, useEffect, MutableRefObject, useContext } from 'react'
import * as styled from './Terminal.styled'
import Parser from 'html-react-parser';
import { commands } from './commands';
import { fetchCat } from '../../helper/fetchCat';
import { config } from './config'
import AppContext from '../../Context/AppContext';


const Terminal: React.FC = () => {

    const { setDisplayPortfolio } = useContext(AppContext)

    const inputRef = useRef() as MutableRefObject<HTMLInputElement>

    const [inputVal, setInputVal] = useState<string>('')
    const [startBlinkCursor, setStartBlinkCursor] = useState<boolean>(false);
    const [output, setOutput] = useState<Array<any>>(['Type --help to show commands'])
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

    const setCommands = (command: any) => {
        setOutput(data => [...data, command]);
    }

    const handleCommands = async (val: any) => {

        const { help, cat, empty, clear, echo, ls, cd, whoami, su, Github, Linkedin, Projects, Portfolio } = config.command;
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
            case Github:
                (actualPath === folderPath) ? window.open('https://github.com/sijab') : setCommands(commands.error(inputVal))
                break;
            case Linkedin:
                (actualPath === folderPath) ? window.open('https://linkedin.com/sijab') : setCommands(commands.error(inputVal))
                break;
            case Projects:
                (actualPath === folderPath) ? window.open('https://google.com') : setCommands(commands.error(inputVal))
                break;
            case Portfolio:
                setDisplayPortfolio(true);
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
            <styled.Wrapper>
                <styled.Container onClick={() => inputRef?.current?.focus()} >
                    <styled.Navbar>
                        <styled.Button buttonColor='red' />
                        <styled.Button buttonColor='orange' />
                        <styled.Button buttonColor='green' />
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
}

export default Terminal;