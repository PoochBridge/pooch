import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import clsx from "clsx";
import React from "react";
import FormView from "../../../FormView";
import ConfirmBlockerSVG from "../../../../media/confirm-blocker.svg";

const useStyles = makeStyles(({ animation, constants, palette }: ITheme) => {
  return createStyles({
    root: {
      maxWidth: 620,
    },
    left: {},
    right: {},
    footer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      "& > *": {
        marginLeft: constants.generalUnit,
      },
    },
  });
});

interface IConfirmBlocker {
  className?: string;
}

const ConfirmBlocker: React.FC<IConfirmBlocker> = ({
  className,
}: IConfirmBlocker) => {
  const classes = useStyles();

  return (
    <FormView
      className={clsx(classes.root, className)}
      heading="Confirm Transfer"
    >
      <img alt="confirm" src={ConfirmBlockerSVG} />
    </FormView>
  );
};

export default ConfirmBlocker;
