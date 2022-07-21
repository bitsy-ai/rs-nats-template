/**
 * Component which returns the standard setup for the client class
 * 
 * @param {AsyncAPIDocument} asyncapi 
 */
 export function getClientImplementation(asyncapi) {
   return `
use async_nats::{ Client, ConnectOptions, ToServerAddrs };

#[derive(Clone, Debug)]
pub struct NatsAsyncApiClient {
    pub nc: Client,
}

impl NatsAsyncApiClient {

  // Try to connect to the NATS server
  pub async fn connect<A: ToServerAddrs>(options: ConnectOptions, addrs: A) -> Result<Self, async_nats::Error>{
      let nc = options.connect(addrs).await?;
      Ok(Self { nc })
  }
}
`}
