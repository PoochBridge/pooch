import React from "react";
import { makeStyles, createStyles, ITheme } from "@chainsafe/common-theme";
import { Button, Typography } from "@chainsafe/common-components";
import { useWeb3 } from "@chainsafe/web3-context";
import PoochSVG from "../../media/pooch.svg";

const useStyles = makeStyles(({ constants, palette }: ITheme) =>
  createStyles({
    root: {},
    header: {
      // height: constants.headerHeight
    },
    contentArea: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "80vw",
      margin: `${60}px auto 0`,
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
      <header className={classes.header}>
        <Typography variant="h1">POOCH</Typography>
      </header>
      <section className={classes.contentArea}>
        <div>
          <section>
            <Typography variant="h1">POOCH PLACEHOLDER</Typography>
          </section>
          <section>
            {!isReady && (
              <Button
                fullsize
                onClick={() => {
                  handleConnect();
                }}
              >
                Connect Metamask
              </Button>
            )}
          </section>
        </div>
        <div>
          <img alt="pooch" src={PoochSVG} />
        </div>
      </section>
    </article>
  );
};

export default WelcomePage;
