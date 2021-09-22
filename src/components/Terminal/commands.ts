import gigachad from '../../assets/img/gigachad.jpg'

export const commands = {
    error: (data: string) => `<br/>${data}: command not found`,
    help: '<br/><span style="color: green">Commands available:</span><br/>clear<br/>echo<br/>cat<br/>ls<br/>cd<br/>whoami<br/>su *user_name*<br/>',
    cat: (data: string) => `<br/><div style="width: 400px; height: 300px"><img style="width: 100%; height: 100%" src="${data}"/></div>`,
    empty: `>`,
    echo: (data: string) => `<br/><div>echo:</div><span style="color: pink" >${data}</span>`,
    ls: (data: string) => data === '~/links$' ? `<br/>Run script ./*script_name*:<br/><span style="color: green">Github<br/>Linkedin<br/>Projects<br/>Portfolio</span>` : `<br/>/links`,
    whoami: `<br/><div style="width: 400px; height: 300px"><img style="width: 100%; height: 100%" src="${gigachad}"/></div>`,
}