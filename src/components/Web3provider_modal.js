import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { pulsechainV4 } from "wagmi/chains";
import Header from "./Header";
const chains = [pulsechainV4];
const projectId = "287dd59791217751e8cccda3e9649c71";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function Web3provider_modal(props) {
  return (
    <>
      <WagmiConfig config={wagmiConfig}></WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default Web3provider_modal;
