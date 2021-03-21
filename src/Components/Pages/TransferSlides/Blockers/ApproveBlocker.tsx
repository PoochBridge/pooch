import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import clsx from "clsx";
import React from "react";
import FormView from "../../../FormView";
import ApproveBlockerSVG from "../../../../media/approve-blocker.svg";

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

interface IApproveBlocker {
  className?: string;
}

const ApproveBlocker: React.FC<IApproveBlocker> = ({
  className,
}: IApproveBlocker) => {
  const classes = useStyles();

  return (
    <FormView
      className={clsx(classes.root, className)}
      heading="Approve Transfer"
    >
      <img alt="approve" src={ApproveBlockerSVG} />
    </FormView>
  );
};

export default ApproveBlocker;
