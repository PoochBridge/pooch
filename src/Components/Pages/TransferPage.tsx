import React from "react";
import { makeStyles, createStyles, ITheme } from "@chainsafe/common-theme";

const useStyles = makeStyles(({ constants, palette }: ITheme) =>
  createStyles({
    root: {},
  })
);

const TransferPage = () => {
  const classes = useStyles();

  return <article className={classes.root}></article>;
};
export default TransferPage;
