import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import React from "react";
import { ReactNode } from "react";

interface IAppWrapper {
  children: ReactNode | ReactNode[];
}

const useStyles = makeStyles(({ animation, constants, palette }: ITheme) => {
  return createStyles({
    root: {},
    inner: {},
    content: {
      // position: "absolute",
      // top: "50%",
      // left: "50%",
      margin: `0 auto`,
      // transform: "translate(-50%, -50%)",
      maxWidth: 460,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      borderRadius: 4,
    },
    pageArea: {},
  });
});

const AppWrapper: React.FC<IAppWrapper> = ({ children }: IAppWrapper) => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <section className={classes.inner}>
        <div className={classes.pageArea}>{children}</div>
      </section>
    </section>
  );
};

export default AppWrapper;
