import { Web3Button, useAddress, useDisconnect, ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";






const Mint: NextPage = () => {
  const router = useRouter();

  const address = useAddress();
  const disconnect = useDisconnect();


  return (

    <div className={styles.container}>

      <div
        role="button"
        onClick={() => router.push(`/`)}
      >
        Go to Home
      </div>
      <div
        role="button"
        onClick={() => router.push(`/stake`)}
      >
        Go to Stake
      </div>

      <hr className={`${styles.divider} ${styles.spacerTop}`} />  

      <h1 className={styles.h1}>Mint An NFT!</h1>


      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />



      {!address && (
        <div>No wallet connected</div>
      )}

      {address && (<>
        <div>My wallet address is {address}</div>
        <button onClick={disconnect}>Disconnect</button>
      </>)}

      <hr className={`${styles.divider} ${styles.spacerTop}`} />

      <Web3Button
        //colorMode="dark"
        //accentColor="#5204BF"
        contractAddress={nftDropContractAddress}
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        Claim An NFT
      </Web3Button>
    </div>
  );
};

export default Mint;
