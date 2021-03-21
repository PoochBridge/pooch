import { Typography } from "@chainsafe/common-components";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import React from "react";
import LogoSvg from "../media/logo.svg";
import TwitterSvg from "../media/twitter.svg";
import GithubSvg from "../media/github.svg";
import MediumSvg from "../media/medium.svg";

const useStyles = makeStyles(({ animation, constants, palette }: ITheme) => {
  return createStyles({
    root: {
      padding: `${constants.generalUnit * 2}px ${constants.pagePadding}px`,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      position: "relative",
    },
    links: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      "& > *": {
        marginLeft: constants.generalUnit,
      },
    },
    blurb: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
    },
  });
});

const AppFooter: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <img alt="logo" src={LogoSvg} />
      <Typography className={classes.blurb}>
        Created for NFTHack 2021
      </Typography>
      <div className={classes.links}>
        <a target="_blank" href="https://twitter.com/poochbridge">
          <img alt="twitter" src={TwitterSvg} />
        </a>
        <a target="_blank" href="https://github.com/PoochBridge/pooch">
          <img alt="github" src={GithubSvg} />
        </a>
        <a target="_blank" href="https://medium.com/pooch-blog">
          <img alt="medium" src={MediumSvg} />
        </a>
      </div>
    </footer>
  );
};

export default AppFooter;
