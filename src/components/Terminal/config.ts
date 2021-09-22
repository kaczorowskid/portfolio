export const config = {
    command: {
        help: '--help',
        cat: 'cat',
        empty: '',
        clear: 'clear',
        echo: 'echo',
        ls: 'ls',
        cd: 'cd',
        nano: 'nano',
        whoami: 'whoami',
        su: 'su',
        Github: './Github',
        Linkedin: './Linkedin',
        Projects: './Projects',
        Portfolio: './Portfolio'
    },
    path: {
        homePath: '~$',
        folderPath: '~/links$'
    },
    folder: {
        links: (path: string) => new RegExp('links|\/links', 'g').test(path),
        back: '..'
    },
    links: {
        Github: 'https://github.com/sijab',
        Linkedin: 'https://linkedin.com/sijab',
        Projects: 'https://'
    }
}