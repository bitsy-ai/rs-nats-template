import { File } from '@asyncapi/generator-react-sdk';

export default function readmeFile({ asyncapi }) {
  return <File name={'README.md'}>
    {
      `
<h1 align="center">${asyncapi.info().title()}</h1>
<h2>Version: ${asyncapi.info().version()}</h2>

${asyncapi.info().description() || ''}

    `
    }
  </File>;
}
