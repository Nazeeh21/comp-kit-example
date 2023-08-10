"use client";
import {
  ConnectButton,
  SwitchNetworks,
  usePublicClient,
  useWalletClient,
} from "@nazeeh2000/comp-kit";
import { mainnet } from "viem/chains";

export default function Home() {
  const publicClient = usePublicClient();
  // publicClient for mainnet
  const mainnetPublicClient = publicClient?.[mainnet.name];

  const walletClient = useWalletClient();

  return (
    <>
      <div>ReadyMade Components</div>
      <ConnectButton />
      <SwitchNetworks />
    </>
  );
}
