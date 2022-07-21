import { File } from '@asyncapi/generator-react-sdk';

export default function cargoFile({ asyncapi, params }) {
  console.log("Generating with params", params);
  return <File name={'Cargo.toml'}>
    {
      `
# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html
[package]
name = "${params.packageName}"
version = "${asyncapi.info().version()}"
edition = "2021"


[dependencies]
async-nats = "0.17"
`
}
  </File>;
}
