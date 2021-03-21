import {
  Button,
  ScrollbarWrapper,
  SelectInput,
  TextInput,
} from "@chainsafe/common-components";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import clsx from "clsx";
import React, { useState } from "react";
import { Category, ERC721Metadata } from "../../../Contexts/ChainbridgeContext";
import FormView from "../../FormView";
import NFTCard from "../../NFTCard";
import AllSvg from "./tabs/all.svg";
import ArtSvg from "./tabs/art.svg";
import DefiSvg from "./tabs/defi.svg";
import DomainNamesSvg from "./tabs/domain-names.svg";
import GamesSvg from "./tabs/games.svg";
import MemesSvg from "./tabs/memes.svg";
import MusicSvg from "./tabs/music.svg";
import OtherSvg from "./tabs/other.svg";
import PhotographySvg from "./tabs/photography.svg";
import PunksSvg from "./tabs/punks.svg";
import TradingCardsSvg from "./tabs/trading-cards.svg";

const useStyles = makeStyles(({ animation, constants, palette }: ITheme) => {
  return createStyles({
    root: {
      maxHeight: "70vh",
    },
    categories: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      "& img": {
        width: "100%",
        padding: `0 ${constants.generalUnit}px`,
      },
    },
    items: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    footer: {},
  });
});

interface ISelectSlide {
  className?: string;
  submit: (target: ERC721Metadata) => void;
  nfts: ERC721Metadata[];
  back: () => void;
}

const SelectSlide: React.FC<ISelectSlide> = ({
  className,
  back,
  submit,
  nfts,
}: ISelectSlide) => {
  const classes = useStyles();

  const [filter, setFilter] = useState<Category>();

  const [selected, setSelected] = useState<ERC721Metadata>();

  return (
    <FormView
      className={clsx(classes.root, className)}
      heading="Select NFT to Transfer"
    >
      <section className={classes.categories}>
        <div>
          <img alt="all" src={AllSvg} />
        </div>
        <div>
          <img alt="art" src={ArtSvg} />
        </div>
        <div>
          <img alt="photography" src={PhotographySvg} />
        </div>
        <div>
          <img alt="music" src={MusicSvg} />
        </div>
        <div>
          <img alt="games" src={GamesSvg} />
        </div>
        <div>
          <img alt="domain names" src={DomainNamesSvg} />
        </div>
        <div>
          <img alt="trading cards" src={TradingCardsSvg} />
        </div>
        <div>
          <img alt="defi" src={DefiSvg} />
        </div>
        <div>
          <img alt="memes" src={MemesSvg} />
        </div>
        <div>
          <img alt="punks" src={PunksSvg} />
        </div>
        <div>
          <img alt="other" src={OtherSvg} />
        </div>
      </section>
      <ScrollbarWrapper className={classes.items}>
        {nfts.map((item: ERC721Metadata, index: number) => (
          <NFTCard key={`nft-${index}`} target={item} />
        ))}
      </ScrollbarWrapper>
      <footer className={classes.footer}>
        <Button variant="outline">Back</Button>
        <Button
          onClick={() => submit(selected as ERC721Metadata)}
          disabled={!selected}
          variant="primary"
        >
          Transfer NFT
        </Button>
      </footer>
    </FormView>
  );
};

export default SelectSlide;
