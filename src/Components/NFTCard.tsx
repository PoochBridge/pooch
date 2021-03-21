import { Typography } from "@chainsafe/common-components";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import clsx from "clsx";
import React from "react";
import { ERC721Metadata } from "../Contexts/ChainbridgeContext";

const useStyles = makeStyles(({ animation, constants, palette }: ITheme) => {
  return createStyles({
    root: {
      width: 200,
      height: 264,
      borderRadius: 5,
      border: "1.5px solid #888888",
      backgroundColor: "white",
      "&.active": {
        boxShadow: "4px 4px 4px rgba(234, 39, 156, 0.25)",
        border: "1.5px solid #EA279C",
      },
    },
    imageBox: {},
    textArea: {},
    left: {},
    right: {},
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
      <div className={classes.imageBox}></div>
      <div className={classes.textArea}>
        <div className={classes.left}>
          <Typography>{target.collection}</Typography>
          <Typography>{target.name}</Typography>
          <Typography>1 of {target.rarity}</Typography>
        </div>
        <div className={classes.right}>
          <Typography>Last Price</Typography>
          <Typography>Ξ {target.lastPrice}</Typography>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
