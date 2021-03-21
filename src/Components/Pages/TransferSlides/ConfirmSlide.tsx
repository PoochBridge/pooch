import { Button, Typography } from "@chainsafe/common-components";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import clsx from "clsx";
import React, { useState } from "react";
import { ERC721Metadata } from "../../../Contexts/ChainbridgeContext";
import FormView from "../../FormView";
import NFTCard from "../../NFTCard";

const useStyles = makeStyles(({ animation, constants, palette }: ITheme) => {
  return createStyles({
    root: {
      maxWidth: 620,
    },
    left: {
      height: 366,
      borderRight: "1px solid #CECECE",
    },
    right: {
      height: 366,
    },
    footer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      borderTop: "1px solid #CECECE",
      boxShadow: "0px -1px 4px rgba(0, 0, 0, 0.25)",
      "& > *": {
        marginLeft: constants.generalUnit,
      },
    },
  });
});

interface IConfirmSlide {
  nft: ERC721Metadata;
  className?: string;
  submit: () => void;
  back: () => void;
}

const ConfirmSlide: React.FC<IConfirmSlide> = ({
  className,
  nft,
  back,
  submit,
}: IConfirmSlide) => {
  const classes = useStyles();

  const [selected, setSelected] = useState<ERC721Metadata>();

  return (
    <FormView
      className={clsx(classes.root, className)}
      heading="Confirm Transfer"
    >
      <section>
        <section className={classes.left}>
          <Typography component="p">Selected NFT</Typography>
          <hr />
          <NFTCard target={nft} active={true} />
        </section>
        <section className={classes.right}>
          <Typography component="p">Transfer Details</Typography>
          <hr />
          <Typography component="p">Origin Network</Typography>
          <Typography component="p">{}</Typography>
          <Typography component="p">Destination network</Typography>
          <Typography component="p">{}</Typography>
          <Typography component="p">Destination address</Typography>
          <Typography component="p">{}</Typography>
        </section>
      </section>
      <footer className={classes.footer}>
        <Button variant="outline">Back</Button>
        <Button onClick={() => submit()} disabled={!selected} variant="primary">
          Transfer NFT
        </Button>
      </footer>
    </FormView>
  );
};

export default ConfirmSlide;
