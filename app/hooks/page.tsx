"use client";
import { useAccount, useBalance, useChain } from "@nazeeh2000/comp-kit";

const Comp = () => {
  const { currentChain } = useChain();
  const { address, isConnected } = useAccount();
  const { balance, fetching, error, etherBalance } = useBalance({
    address: address?.[0] ?? "0x0",
    // all the other parameters you can pass to `getBalance` from viem
    // example: blockTag: 'latest'
  });

  return (
    <>
      Current Chain: {currentChain?.name}
      {address && isConnected
        ? "Connected Address: " + address?.[0]
        : "Not Connected"}
      {fetching
        ? "Fetching"
        : error
        ? "Error while fetching balance"
        : "Balance:" + balance?.toString()}
    </>
  );
};

export default Comp;
