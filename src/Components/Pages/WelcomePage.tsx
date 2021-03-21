import React from "react";
import { makeStyles, createStyles, ITheme } from "@chainsafe/common-theme";
import { Button, Typography } from "@chainsafe/common-components";
import { useWeb3 } from "@chainsafe/web3-context";
import PoochSVG from "../../media/pooch.svg";
import BannerSVG from "../../media/banner.svg";
import ChainsSVG from "../../media/chains.svg";

const useStyles = makeStyles(({ constants, palette }: ITheme) =>
  createStyles({
    root: {},
    header: {
      // height: constants.headerHeight
    },
    aboveFold: {
      display: "flex",
      flexDirection: "row",
      "& > *": {
        width: "50%",
      },
    },
    left: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      "& h1 span": {
        color: palette.additional.pink,
      },
      "& h3": {
        marginTop: constants.generalUnit * 4,
        marginBottom: constants.generalUnit * 5,
      },
    },
    connect: {
      marginTop: constants.generalUnit * 4,
    },
    poochBox: {
      display: "flex",
      justifyContent: "flex-end",
    },
    poochA: {
      maxHeight: "80vh",
    },
    banner: {
      margin: `${constants.generalUnit * 14}px auto`,
      display: "flex",
      justifyContent: "center",
      "& img": {
        maxWidth: "80vw",
      },
    },
    belowFold: {
      display: "flex",
      flexDirection: "row",
      "& > *": {
        width: "50%",
      },
      "& h2 span": {
        color: palette.additional.pink,
      },
    },
    chains: {
      maxHeight: "70vh",
      maxWidth: "100%",
    },
  })
);

const WelcomePage = () => {
  const classes = useStyles();

  const { isReady, checkIsReady, wallet, onboard } = useWeb3();

  const handleConnect = async () => {
    !wallet && (await onboard?.walletSelect());
    await checkIsReady();
  };

  return (
    <article className={classes.root}>
      <section className={classes.aboveFold}>
        <div className={classes.left}>
          <Typography component="h1" variant="h1">
            Transfer NFTs <br /> across blockchains <br /> with{" "}
            <span>Pooch!</span>
          </Typography>
          <Typography component="h3" variant="h3">
            He’s one nifty mother pupper.
          </Typography>
          <div>
            {!isReady && (
              <Button
                variant="primary"
                size="large"
                onClick={() => {
                  handleConnect();
                }}
              >
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
        <div className={classes.poochBox}>
          <img className={classes.poochA} alt="pooch" src={PoochSVG} />
        </div>
      </section>
      <section className={classes.banner}>
        <img alt="banner" src={BannerSVG} />
      </section>
      <section className={classes.belowFold}>
        <div className={classes.left}>
          <Typography component="h2" variant="h1">
            Take advantage <br /> of dapps, games &{" "}
            <span>
              lower
              <br /> transaction fees
            </span>{" "}
            on <br />
            different chains.
          </Typography>
          <div>
            {!isReady && (
              <Button
                className={classes.connect}
                variant="primary"
                size="large"
                onClick={() => {
                  handleConnect();
                }}
              >
                Play with Pooch
              </Button>
            )}
          </div>
        </div>
        <div>
          <img className={classes.chains} alt="chains" src={ChainsSVG} />
        </div>
      </section>
    </article>
  );
};

export default WelcomePage;
