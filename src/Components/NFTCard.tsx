import { Typography } from "@chainsafe/common-components";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import clsx from "clsx";
import React from "react";
import { ERC721Metadata } from "../Contexts/ChainbridgeContext";

const useStyles = makeStyles(({ animation, constants, palette }: ITheme) => {
  return createStyles({
    root: {
      width: 200,
      height: 270,
      borderRadius: 5,
      border: "1.5px solid #888888",
      padding: 10,
      backgroundColor: "white",
      "&.active": {
        boxShadow: "4px 4px 4px rgba(234, 39, 156, 0.25)",
        border: "1.5px solid #EA279C",
      },
    },
    imageBox: {
      height: 180,
      width: 180,
      overflow: "hidden",
      "& img": {
        height: "100%",
        margin: "0 auto",
      },
    },
    textArea: {
      paddingTop: constants.generalUnit,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    left: {
      "& > *:nth-child(even)": {
        color: "#555555",
      },
      "& > *:nth-child(odd)": {
        color: "#888888",
      },
    },
    right: {
      "& > *:nth-child(even)": {
        color: "#555555",
      },
      "& > *:nth-child(odd)": {
        color: "#888888",
      },
    },
  });
});

interface INFTCard {
  target: ERC721Metadata;
  onClick?: () => void;
  className?: string;
  active?: boolean;
}

const NFTCard: React.FC<INFTCard> = ({
  target,
  active,
  className,
  onClick,
}: INFTCard) => {
  const classes = useStyles();

  return (
    <div
      onClick={onClick}
      className={clsx(classes.root, className, {
        active: active,
      })}
    >
      <div className={classes.imageBox}>
        <img alt={target.name} src={target.image} />
      </div>
      <div className={classes.textArea}>
        <div className={classes.left}>
          <Typography component="p">{target.collection}</Typography>
          <Typography component="p">{target.name}</Typography>
          <Typography component="p">1 of {target.rarity}</Typography>
        </div>
        <div className={classes.right}>
          <Typography component="p">Last Price</Typography>
          <Typography component="p">Ξ {target.lastPrice}</Typography>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
