import {
  Button,
  ScrollbarWrapper,
  SelectInput,
  TextInput,
  Typography,
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
      margin: "0 auto",
      maxHeight: "70vh",
      maxWidth: 1164,
      width: "80vw",
      position: "relative",
      paddingBottom: 65,
    },
    categories: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      borderBottom: "1px solid #CECECE",
      "& img": {
        width: "100%",
        padding: `0 ${constants.generalUnit}px`,
      },
    },
    wrapper: {
      maxHeight: "50vh",
      margin: `${constants.generalUnit * 2}px 0`,
    },
    items: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      margin: `${constants.generalUnit * 2}px 0`,
      flexWrap: "wrap",
    },
    card: {
      cursor: "pointer",
      margin: constants.generalUnit,
    },
    category: {
      cursor: "pointer",
      "&.active": {},
    },
    footer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      boxShadow: "0px -1px 4px rgba(0, 0, 0, 0.25)",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      padding: constants.generalUnit * 2,
      backgroundColor: String(palette.additional.grayLight),
      height: 65,
      "& > *": {
        marginLeft: constants.generalUnit,
      },
    },
    button: {
      backgroundColor: String(palette.additional.pink),
    },
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
        <div
          onClick={() => setFilter(undefined)}
          className={clsx(classes.category, {
            active: filter === undefined,
          })}
        >
          <img alt="all" src={AllSvg} />
        </div>
        <div
          onClick={() => setFilter("Art")}
          className={clsx(classes.category, {
            active: filter === "Art",
          })}
        >
          <img alt="art" src={ArtSvg} />
        </div>
        <div
          onClick={() => setFilter("Photography")}
          className={clsx(classes.category, {
            active: filter === "Photography",
          })}
        >
          <img alt="photography" src={PhotographySvg} />
        </div>
        <div
          onClick={() => setFilter("Music")}
          className={clsx(classes.category, {
            active: filter === "Music",
          })}
        >
          <img alt="music" src={MusicSvg} />
        </div>
        <div
          onClick={() => setFilter("Games")}
          className={clsx(classes.category, {
            active: filter === "Games",
          })}
        >
          <img alt="games" src={GamesSvg} />
        </div>
        <div
          onClick={() => setFilter("Domains")}
          className={clsx(classes.category, {
            active: filter === "Domains",
          })}
        >
          <img alt="domain names" src={DomainNamesSvg} />
        </div>
        <div
          onClick={() => setFilter("Trading Cards")}
          className={clsx(classes.category, {
            active: filter === "Trading Cards",
          })}
        >
          <img alt="trading cards" src={TradingCardsSvg} />
        </div>
        <div
          onClick={() => setFilter("Defi")}
          className={clsx(classes.category, {
            active: filter === "Defi",
          })}
        >
          <img alt="defi" src={DefiSvg} />
        </div>
        <div
          onClick={() => setFilter("Memes")}
          className={clsx(classes.category, {
            active: filter === "Memes",
          })}
        >
          <img alt="memes" src={MemesSvg} />
        </div>
        <div
          onClick={() => setFilter("Punks")}
          className={clsx(classes.category, {
            active: filter === "Punks",
          })}
        >
          <img alt="punks" src={PunksSvg} />
        </div>
        <div
          onClick={() => setFilter("Other")}
          className={clsx(classes.category, {
            active: filter === "Other",
          })}
        >
          <img alt="other" src={OtherSvg} />
        </div>
      </section>
      <ScrollbarWrapper className={classes.wrapper}>
        <section className={classes.items}>
          {nfts
            .filter(
              (item: ERC721Metadata) =>
                filter === undefined || item.category === filter
            )
            .map((item: ERC721Metadata, index: number) => (
              <NFTCard
                active={selected?.id === item.id}
                className={classes.card}
                onClick={() => setSelected(item)}
                key={`nft-${index}`}
                target={item}
              />
            ))}
          {nfts.filter(
            (item: ERC721Metadata) =>
              filter === undefined || item.category === filter
          ).length === 0 && <Typography>None to display</Typography>}
        </section>
      </ScrollbarWrapper>
      <footer className={classes.footer}>
        <Button size="large" onClick={() => back()} variant="outline">
          Back
        </Button>
        <Button
          className={classes.button}
          size="large"
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
