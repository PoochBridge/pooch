export type AssetType = "ERC20" | "ERC721";

export type TokenConfig = {
  address: string;
  name?: string;
  symbol?: string;
  imageUri?: string;
  resourceId: string;
  isNativeWrappedToken?: boolean;
  type: AssetType;
};

export type BridgeConfig = {
  chainId: number;
  networkId: number;
  name: string;
  bridgeAddress: string;
  erc20HandlerAddress: string;
  erc721HandlerAddress: string;
  rpcUrl: string;
  type: "Ethereum" | "Substrate";
  tokens: TokenConfig[];
  nativeTokenSymbol: string;
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string;
  defaultGasPrice?: number;
};

export type ChainbridgeConfig = {
  chains: BridgeConfig[];
};

export const chainbridgeConfig: ChainbridgeConfig = {
  // Goerli - Kotti Bridge
  chains: [
    {
      chainId: 0,
      networkId: 5,
      name: "Ethereum - Goerli",
      bridgeAddress: "0x6E5F2106184b90B030622D7E353244C27c5e2d83",
      erc20HandlerAddress: "0xa8EDC7ad8ab91cDCaB6a033Ed63b70B45917dE61",
      erc721HandlerAddress: "0x8CFce9C250615E92e56A4dA09D833B270222E910",
      rpcUrl: "https://goerli.prylabs.net",
      type: "Ethereum",
      blockExplorer: "https://goerli.etherscan.io/tx",
      nativeTokenSymbol: "ETH",
      tokens: [
        {
          address: "0x4467982362af543Ab8EbC6BEE25D33CF8d13bA1A",
          name: "Genisis pooch",
          symbol: "Bork",
          imageUri: "",
          type: "ERC721",
          resourceId:
            "0x0000000000000000000000004467982362af543Ab8EbC6BEE25D33CF8d13bA1A",
        },
      ],
    },
    {
      chainId: 6,
      networkId: 6,
      name: "Ethereum Classic - Kotti",
      bridgeAddress: "0x8f2f8D538BA3b52cb5B969E6c11507738A805C5D",
      erc20HandlerAddress: "0x6E5F2106184b90B030622D7E353244C27c5e2d83",
      erc721HandlerAddress: "0xa8EDC7ad8ab91cDCaB6a033Ed63b70B45917dE61",
      rpcUrl: "https://www.ethercluster.com/kotti",
      type: "Ethereum",
      blockExplorer: "https://blockscout.com/etc/kotti/tx",
      nativeTokenSymbol: "ETC",
      tokens: [
        {
          address: "0x4467982362af543Ab8EbC6BEE25D33CF8d13bA1A",
          name: "Genisis pooch",
          symbol: "Bork",
          imageUri: "",
          type: "ERC721",
          resourceId:
            "0x0000000000000000000000004467982362af543Ab8EbC6BEE25D33CF8d13bA1A",
        },
      ],
    },
  ],

  // DEVNET
  //   erc20ResourceId:
  //   "0x00000000000000000000000021605f71845f372A9ed84253d2D024B7B10999f4",
  // chains: [
  // {
  //   chainId: 1,
  //   networkId: 5,
  //   name: "Ethereum - A",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8545",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthA",
  //       symbol: "TESTA",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // {
  //   chainId: 2,
  //   networkId: 6,
  //   name: "Ethereum - B",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8546",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthB",
  //       symbol: "TESTB",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // ]
};
