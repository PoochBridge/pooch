import { ERC721Metadata } from "./Contexts/ChainbridgeContext";

const nfts: ERC721Metadata[] = [
  {
    image: "/1.svg",
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 1.4,
    name: "Jasper",
    id: "0x1",
  },
  {
    image: "/2.svg",
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 2.65,
    name: "Ezra",
    id: "0x2",
  },
  {
    image: "/3.svg",
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 5.2,
    name: "Wayne",
    id: "0x3",
  },
  {
    image: "/4.svg",
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 7.5,
    name: "HUXLEY",
    id: "0x4",
  },
  {
    image: "/5.svg",
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 8.5,
    name: "KAI",
    id: "0x5",
  },
  {
    image: "/6.svg",
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 10.4,
    name: "LORELEI",
    id: "0x6",
  },
  {
    image: "/7.svg",
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 12.4,
    name: "MILA",
    id: "0x7",
  },
  {
    image: "/8.svg",
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 15.6,
    name: "Wayne",
    id: "0x8",
  },
  {
    image: "/9.svg",
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 18.3,
    name: "ELLIE",
    id: "0x9",
  },
  {
    image: "/10.svg",
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 19.2,
    name: "MINNIE",
    id: "0x10",
  },
];

export const getNftMetadata = (id: string): ERC721Metadata | undefined =>
  nfts.find((nft) => nft.id === id);
