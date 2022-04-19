import { gigachad } from '@assets';

export const commands = {
  error: (data: string) => `<br/><span style="color: red; background: black;" >${data}: command not found</span>`,
  help: '<br/><span style="color: green">Commands available:</span><br/>clear<br/>echo<br/>cat<br/>ls<br/>cd<br/>whoami<br/>su *user_name*<br/>',
  cat: (data: string) => `<br/><div style="width: 400px; height: 300px"><img style="width: 100%; height: 100%" src="${data}"/></div>`,
  empty: `>`,
  echo: (data: string) => `<br/><div>echo:</div><span style="color: pink" >${data}</span>`,
  ls: (data: string) => data === '~/apps$' ? `<br/>Run script ./*script_name*:<br/><span style="color: green">VSCode</span>` : `<br/>/apps`,
  whoami: `<br/><div style="width: 400px; height: 300px"><img style="width: 100%; height: 100%" src="${gigachad}"/></div>`,
}