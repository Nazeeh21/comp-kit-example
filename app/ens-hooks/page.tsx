"use client";
import { useEnsAddress, useEnsAvatar, useEnsName } from "@nazeeh2000/comp-kit";
import Image from "next/image";

const Comp = () => {
  const { address, fetching, error } = useEnsAddress({
    ensName: "vitalik.eth",
  });

  const {
    avatar,
    fetching: avatarfetching,
    error: avatarError,
  } = useEnsAvatar({
    ensName: "wagmi-dev.eth",
  });

  const {
    ensName,
    fetching: ensFetching,
    error: ensError,
  } = useEnsName({
    address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
  });

  return (
    <>
      <div>Ens Address</div>
      {fetching && <div>Fetching...</div>}
      {error && <div>Error: {error.message}</div>}
      {address && <div>Address: {address}</div>}
      <div>Ens Avatar</div>
      {avatarfetching && <div>Fetching...</div>}
      {avatarError && <div>Error: {avatarError.message}</div>}
      {avatar && (
        <div>
          Avatar: <Image src={avatar} width={100} height={100} alt="avatar" />
        </div>
      )}
      <div>Ens Name</div>
      {ensFetching && <div>Fetching...</div>}
      {ensError && <div>Error: {ensError.message}</div>}
      {ensName && <div>Ens Name: {ensName}</div>}
    </>
  );
};

export default Comp;
