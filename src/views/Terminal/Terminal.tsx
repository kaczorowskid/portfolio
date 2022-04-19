import { useState, useRef, useEffect, useContext, forwardRef } from 'react';
import Parser from 'html-react-parser';
import { motion } from 'framer-motion';
import {
  Wrapper,
  Container,
  OutputContainer,
  Output,
  Tilde,
  InputContainer,
  InputElement,
  Prompt,
  ActualPath,
  Input,
  Cursor
} from './Terminal.styled';
import { commands } from './commands';
import { fetchCat } from '@utils';
import { config } from './config';
import { AppContext } from '@context';
import { Navbar } from '@components';


const Terminal = forwardRef<HTMLDivElement, any>((_, ref) => {

  const { setDisplayVSC, setDisplayTerminal } = useContext(AppContext)

  const inputRef = useRef<HTMLInputElement>(null);

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
    <Wrapper  >
      <Container ref={ref} onClick={() => inputRef?.current?.focus()} >
        <Navbar appName='Terminal' setDisplay={setDisplayTerminal} />
        <OutputContainer>
          {output.map((val: any, i: any) => <Output key={i} >{Parser(val)}</Output>)}
        </OutputContainer>
        <Tilde >~</Tilde>
        <InputContainer>
          <InputElement ref={inputRef} onChange={e => setInputVal(e.target.value)} value={inputVal} /><br />
          <Prompt>{user}@chadOS:&nbsp;<ActualPath>{actualPath}</ActualPath></Prompt>
          <Input> {inputVal.replace(/ /g, "\u00a0")} </Input>
          <Cursor blink={startBlinkCursor} />
        </InputContainer>
      </Container>
    </Wrapper>
  )
})

export default motion(Terminal, { forwardMotionProps: true })