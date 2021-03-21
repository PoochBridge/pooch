import { Button, Typography } from "@chainsafe/common-components";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { useWeb3 } from "@chainsafe/web3-context";
import clsx from "clsx";
import React, { useState } from "react";
import { ERC721Metadata } from "../../../Contexts/ChainbridgeContext";
import { shortenAddress } from "../../../Utils/Helpers";
import FormView from "../../FormView";
import NFTCard from "../../NFTCard";

const useStyles = makeStyles(({ animation, constants, palette }: ITheme) => {
  return createStyles({
    root: {
      maxWidth: 620,
      width: "80vw",
      margin: "0 auto",
      position: "relative",
      height: "50vh",
      maxHeight: 550,
    },
    content: {
      display: "flex",
    },
    left: {
      paddingTop: constants.generalUnit * 2,
      height: 366,
      borderRight: "1px solid #CECECE",
      paddingRight: 38,
      "& h5": {
        marginBottom: constants.generalUnit * 2,
      },
      "& hr": {
        marginBottom: constants.generalUnit * 2,
      },
    },
    right: {
      paddingTop: constants.generalUnit * 2,
      height: 366,
      flex: "1 1 0",
      paddingLeft: 38,
      "& h5": {
        marginBottom: constants.generalUnit * 2,
      },
      "& hr": {
        marginBottom: constants.generalUnit * 2,
      },
      "& p": {
        "&:nth-child(even)": {
          paddingBottom: constants.generalUnit * 2,
          color: "#555555",
        },
        "&:nth-child(odd)": {
          color: "#888888",
        },
      },
    },
    footer: {
      position: "absolute",
      left: 0,
      bottom: 0,
      backgroundColor: "white",
      padding: `${constants.generalUnit * 1.5}px`,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      borderTop: "1px solid #CECECE",
      boxShadow: "0px -1px 4px rgba(0, 0, 0, 0.25)",
      "& > *": {
        marginLeft: constants.generalUnit,
      },
    },
    button: {
      backgroundColor: String(palette.additional.pink),
    },
  });
});

interface IConfirmSlide {
  nft: ERC721Metadata;
  className?: string;
  submit: () => void;
  back: () => void;
  targetAddress: string;
}

const ConfirmSlide: React.FC<IConfirmSlide> = ({
  className,
  nft,
  back,
  submit,
  targetAddress,
}: IConfirmSlide) => {
  const classes = useStyles();

  const { network } = useWeb3();
  return (
    <FormView
      className={clsx(classes.root, className)}
      heading="Confirm Transfer"
    >
      <section className={classes.content}>
        <section className={classes.left}>
          <Typography variant="h5" component="h5">
            Selected NFT
          </Typography>
          <hr />
          <NFTCard target={nft} active={true} />
        </section>
        <section className={classes.right}>
          <Typography variant="h5" component="h5">
            Transfer Details
          </Typography>
          <hr />
          <Typography variant="h5" component="p">
            Origin Network
          </Typography>
          <Typography variant="h5" component="p">
            {network === 5 ? "Görli" : "Kotti"}
          </Typography>
          <Typography variant="h5" component="p">
            Destination network
          </Typography>
          <Typography variant="h5" component="p">
            {network === 5 ? "Kotti" : "Görli"}
          </Typography>
          <Typography variant="h5" component="p">
            Destination address
          </Typography>
          <Typography variant="h5" component="p">
            {shortenAddress(targetAddress)}
          </Typography>
        </section>
      </section>
      <footer className={classes.footer}>
        <Button onClick={() => back()} variant="outline">
          Back
        </Button>
        <Button
          className={classes.button}
          onClick={() => submit()}
          variant="primary"
        >
          Transfer NFT
        </Button>
      </footer>
    </FormView>
  );
};

export default ConfirmSlide;
