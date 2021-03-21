import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import React from "react";
import LogoSvg from "../media/logo.svg";

const useStyles = makeStyles(({ animation, constants, palette }: ITheme) => {
  return createStyles({
    root: {
      padding: `${constants.generalUnit * 2}px ${constants.pagePadding}px`,
      width: "100%",
      height: Number(constants.headerHeight),
    },
  });
});

const AppHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <img alt="logo" src={LogoSvg} />
    </header>
  );
};

export default AppHeader;
