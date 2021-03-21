import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import React from "react";
import { ReactNode } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

interface IAppWrapper {
  children: ReactNode | ReactNode[];
}

const useStyles = makeStyles(({ animation, constants, palette }: ITheme) => {
  return createStyles({
    root: {},
    pageArea: {
      padding: `${constants.generalUnit * 2}px ${constants.pagePadding}px`,
    },
  });
});

const AppWrapper: React.FC<IAppWrapper> = ({ children }: IAppWrapper) => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <AppHeader />
      <div className={classes.pageArea}>{children}</div>
      <AppFooter />
    </section>
  );
};

export default AppWrapper;
