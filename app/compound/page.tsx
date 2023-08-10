"use client";
import { ConnectButtonPrimitive, useAccount } from "@nazeeh2000/comp-kit";
import { SwitchNetworkWrapper } from "@nazeeh2000/comp-kit";
import { arbitrum, mainnet, polygon } from "viem/chains";

export default function Home() {
  const { address, isConnected } = useAccount();
  return (
    <>
      <ConnectButtonPrimitive>
        {isConnected && address ? (
          <>
            <div>Connected address: {address?.[0].toString()}</div>
            <ConnectButtonPrimitive.DisconnectButton
              style={{ background: "#333", color: "white", opacity: 0.9 }}
            >
              Disconnect Wallet
            </ConnectButtonPrimitive.DisconnectButton>
          </>
        ) : (
          <>
            <ConnectButtonPrimitive.Button>
              Compound Connect Button
            </ConnectButtonPrimitive.Button>
            <ConnectButtonPrimitive.Modal
              heading="Custom Connect Wallet"
              closeOnOverlayClick={true}
              style={{ background: "#333", color: "white", opacity: 0.9 }}
              closeButtonProps={{
                style: {
                  background: "#ccc",
                  color: "black",
                  border: "1.5px solid black",
                },
              }}
            >
              <ConnectButtonPrimitive.MetaMaskButton
                style={{
                  background: "#2c97de",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Metamask
              </ConnectButtonPrimitive.MetaMaskButton>
              <ConnectButtonPrimitive.WalletConnect
                style={{
                  background: "#2c97de",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                WalletConnect
              </ConnectButtonPrimitive.WalletConnect>
            </ConnectButtonPrimitive.Modal>
          </>
        )}
      </ConnectButtonPrimitive>
      <SwitchNetworkWrapper style={{ background: "cyan" }}>
        <SwitchNetworkWrapper.Option
          style={{ border: "2px solid cyan", background: "yellow" }}
          value={mainnet}
        >
          mainnet
        </SwitchNetworkWrapper.Option>
        <SwitchNetworkWrapper.Option css={{ color: "blue" }} value={arbitrum}>
          arbitrum
        </SwitchNetworkWrapper.Option>
        <SwitchNetworkWrapper.Option css={{ color: "blue" }} value={polygon}>
          Polygon
        </SwitchNetworkWrapper.Option>
      </SwitchNetworkWrapper>
    </>
  );
}
