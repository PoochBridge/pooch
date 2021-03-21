import { ERC721Metadata } from "./Contexts/ChainbridgeContext";
import OneSVG from "./media/1.svg";
import TwoSVG from "./media/1.svg";
import ThreeSVG from "./media/1.svg";
import FourSVG from "./media/1.svg";
import FiveSVG from "./media/1.svg";
import SixSVG from "./media/1.svg";
import SevenSVG from "./media/1.svg";
import EightSVG from "./media/1.svg";
import NineSVG from "./media/1.svg";
import TenSVG from "./media/1.svg";

const nfts: ERC721Metadata[] = [
  {
    image: OneSVG,
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 1.4,
    name: "Jasper",
    id: "0x101",
  },
  {
    image: TwoSVG,
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 2.65,
    name: "Ezra",
    id: "0x102",
  },
  {
    image: ThreeSVG,
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 5.2,
    name: "Wayne",
    id: "0x103",
  },
  {
    image: FourSVG,
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 7.5,
    name: "HUXLEY",
    id: "0x104",
  },
  {
    image: FiveSVG,
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 8.5,
    name: "KAI",
    id: "0x105",
  },
  {
    image: SixSVG,
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 10.4,
    name: "LORELEI",
    id: "0x106",
  },
  {
    image: SevenSVG,
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 12.4,
    name: "MILA",
    id: "0x107",
  },
  {
    image: EightSVG,
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 15.6,
    name: "Wayne",
    id: "0x108",
  },
  {
    image: NineSVG,
    category: "Trading Cards",
    collection: "OGPooch",
    rarity: 1,
    lastPrice: 18.3,
    name: "ELLIE",
    id: "0x109",
  },
  // {
  //   image: TenSVG,
  //   category: "Trading Cards",
  //   collection: "OGPooch",
  //   rarity: 1,
  //   lastPrice: 19.2,
  //   name: "MINNIE",
  //   id: "0x1010",
  // },
];

export const getNftMetadata = (id: string): ERC721Metadata | undefined =>
  nfts.find((nft) => nft.id === id);
