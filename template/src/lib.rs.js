import { File } from '@asyncapi/generator-react-sdk';

import { getClientImplementation } from '../../components/client';

/**
 * Function to render lib.rs file.
 * 
 * @param {RenderArgument} param0 render arguments received from the generator.
 */
export default function index({ asyncapi, params }) {
  return (
    <File name="lib.rs">
      {`
  ${getClientImplementation(asyncapi)}
  `}
    </File>
  );
}
