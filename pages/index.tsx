import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>PETRACE - Custom Playing Game</h1>

      <Image
        src="/About-Us.png"
        width={400}
        height={100}
        alt="About Us"
      />
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
          <Image src="/drop.jpg" alt="drop" width={60} height={60} />
          <h2 className={styles.selectBoxTitle}>Mint a new NFT</h2>
          <p className={styles.selectBoxDescription}>
            Mint NFTs. Your new NFT brings you good luck.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <Image src="/arena0.png" alt="arena" width={150} height={60} />
          <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
          <p className={styles.selectBoxDescription}>
            Rent your NFT asset to the arena. Then you can earn participation allowance every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
