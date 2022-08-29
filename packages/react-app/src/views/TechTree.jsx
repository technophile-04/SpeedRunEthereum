import React from "react";
import techTreeTheme from "../themes/techTreeTheme";
/* Skill-Tree-imports */
import { SkillTreeGroup, SkillTree, SkillProvider } from "../components/tech-tree";

/* Dummy Tree data filler */
export const dummyTreeDataStructure = [
  {
    id: "simpleNFT",
    icon: "https://img.freepik.com/free-vector/runner-flames-flat-style_52683-16316.jpg?w=1380&t=st=1661335994~exp=1661336594~hmac=1530e195f5c99e0a2d14c7c05ed1e393c4e9723f1209cfef12c6267095ac7e5d",
    title: "🎟 Simple NFT Example",
    tooltip: {
      content:
        "🎫 Create a simple NFT to learn basics of 🏗 scaffold-eth. You'll use 👷‍♀️ HardHat to compile and deploy smart contracts.",
    },
    children: [
      {
        id: "gamingTrack",
        icon: "https://img.freepik.com/free-psd/playing-video-games-home_1419-2568.jpg?w=1380&t=st=1661338416~exp=1661339016~hmac=c022e315fd8c3e88b017a9420a0a96cb93c609b0bab666ede50ed26036a14020",
        title: "🥩 Decentralized Staking App",
        tooltip: {
          content:
            "🦸 A superpower of Ethereum is allowing you, the builder, to create a simple set of rules that an adversarial group of players can use to work together. In this challenge, you create a decentralized application where users can coordinate a group funding effort. The users only have to trust the code.",
        },

        children: [
          {
            id: "tokenVendor",
            icon: "https://img.freepik.com/free-psd/vending-machine-mockup_1310-595.jpg?w=2000&t=st=1661338621~exp=1661339221~hmac=fe5e9fe8572270f99d06bc5397b487c3a2f1258edc5655a11f6a7154c932e0c4",
            title: "🏵 Token Vendor",
            tooltip: {
              content:
                "🤖 Smart contracts are kind of like 'always on' vending machines that anyone can access. Let's make a decentralized, digital currency (an ERC20 token). Then, let's build an unstoppable vending machine that will buy and sell the currency. We'll learn about the 'approve' pattern for ERC20s and how contract to contract interactions work.",
            },
            children: [],
          },
          {
            id: "diceGame",
            icon: "https://img.freepik.com/free-psd/dice-mockup_1332-8746.jpg?w=826&t=st=1661338756~exp=1661339356~hmac=5d10696d0c7f67bce606bf9a947cc779a0e52af946029911575a8261e7862894",
            title: "🎲 Dice Game",
            tooltip: {
              content:
                "🎰 Randomness is tricky on a public deterministic blockchain. The block hash is the result proof-of-work (for now) and some builders use this as a weak form of randomness. In this challenge you will take advantage of a Dice Game contract by predicting the randomness in order to only roll winning dice!",
            },
            children: [],
          },
        ],
      },
      {
        id: "defiTrack",
        icon: "https://img.freepik.com/free-psd/st-patrick-s-day-shamrock-coins-icon-render_23-2149325656.jpg?w=1380&t=st=1661338197~exp=1661338797~hmac=1f3cc479012809620ced8be97be2f3a4b884d6220c41b320eca814446ff03da1",
        title: " ⚖️ Build a DEX",
        tooltip: {
          content:
            "💵 Build an exchange that swaps ETH to tokens and tokens to ETH. 💰 This is possible because the smart contract holds reserves of both assets and has a price function based on the ratio of the reserves. Liquidity providers are issued a token that represents their share of the reserves and fees...",
        },
        children: [],
      },
      {
        id: "multiSigTrack",
        icon: "https://img.freepik.com/free-psd/3d-nft-icon-digital-wallet_629802-10.jpg?w=1380&t=st=1661335646~exp=1661336246~hmac=996e32145a137fbe0f0b6c00f2733e09aad342f52ebb85bdffea58913f7d997e",
        title: "👛 Multisig Wallet",
        tooltip: {
          content:
            "👩‍👩‍👧‍👧 Using a smart contract as a wallet we can secure assets by requiring multiple accounts to 'vote' on transactions. The contract will keep track of transactions in an array of structs and owners will confirm or reject each one. Any transaction with enough confirmations can 'execute'.",
        },
        children: [],
      },
      {
        id: "nftTrack",
        icon: "https://stratosnft.io/_next/image?url=https%3A%2F%2Ffanbase-1.s3.amazonaws.com%2Fnft_image%2F0x28E1679b0b5CAbd4F494278171cEDcB7134D5DF2%2F1%2F1660575171%2Fimage.svg&w=3840&q=75",
        title: "🎁 SVG NFT 🎫 Building Cohort",
        tooltip: {
          content:
            "🧙 Tinker around with cutting edge smart contracts that render SVGs in Solidity. 🧫 We quickly discovered that the render function needs to be public... 🤔 This allows NFTs that own other NFTs to render their stash. Just wait until you see an Optimistic Loogie and a Fancy Loogie swimming around in the same Loogie Tank!",
        },
        children: [],
      },
    ],
  },
];

function TechTree() {
  return (
    <SkillProvider>
      <SkillTreeGroup theme={techTreeTheme}>
        {() => {
          return (
            <>
              <SkillTree
                title="Learn how to build on Ethereum; the superpowers and the gotchas"
                treeId="mainTechTree"
                data={dummyTreeDataStructure}
              />
            </>
          );
        }}
      </SkillTreeGroup>
    </SkillProvider>
  );
}

export default TechTree;
