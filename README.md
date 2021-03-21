# Pooch
**Transfer NFTs across blockchains with Pooch. He's one nifty mother pupper!**

![Pooch](https://ethglobal.s3.amazonaws.com/recWdMBcvH8LsMZvR/ETHGlobal_Cover_Photo.png)

## What is Pooch?

Pooch is a simple, fun interface for NFT creators, investors, and enthusiasts to transfer their NFTs across blockchains.

Our team:
* 🇿🇦 Michael Yankelev - NFT minting, integrations
* 🇿🇦 Ryan Noble - Front-end
* 🇨🇦 Cindy Chau - NFT design, front-end
* 🇩🇪 Megan Doyle - UX/UI design, content & copy
* 🇩🇪 Liesl Eichholz - UX/UI design, content & copy


## How it Works

Pooch is designed to be compatible with any blockchain that has implemented [ChainBridge](https://github.com/ChainSafe/ChainBridge)'s ERC721 handler. The initial demo connects Ethereum's Görli and Kotti testnets, but the interface is designed to be arbitrarily composable, connecting with any ChainBridge implementation with a few minor tweaks.

Pooch is an open source React app that enables easy cross-chain ERC-721 transfers. In the current iteration of Pooch, we used IPFS to host NFTs made by our team as part of the NFTHack hackathon demonstration.

**Work Flow**

A user locks up the NFT they plan to send in the ChainBridge contract on the origin chain. The user also needs to input the destination chain (where the NFT will be sent). The deposit function of the ChainBridge handler contract is called, which validates the parameters provided by the user, creating an execution record on the corresponding call of the target contract.

Once the NFT is in the bridge contract, the bridge relayer triggers the contract on the destination chain to mint an identical NFT to the wallet address that the user specified. ChainBridge functionality is two-way, which means that a user can transfer NFTs from one chain to another, and back again (if they so desire).

To send it back to the origin chain, the bridge contract burns the NFT and transfers ownership of the NFT back to the address that the user specified.
