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
    VSCode: './VSCode',
  },
  path: {
    homePath: '~$',
    folderPath: '~/apps$'
  },
  folder: {
    links: (path: string) => new RegExp('apps|\/apps', 'g').test(path),
    back: '..'
  },
  links: {
    Github: 'https://github.com/sijab',
    Linkedin: 'https://linkedin.com/sijab',
    Projects: 'https://'
  }
}