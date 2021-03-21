import { Typography } from "@chainsafe/common-components";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import clsx from "clsx";
import React, { ReactNode } from "react";

const useStyles = makeStyles(({ animation, constants, palette }: ITheme) => {
  return createStyles({
    root: {
      borderRadius: 12,
      overflow: "hidden",
    },
    header: {
      backgroundColor: String(palette.additional.gray),
      color: palette.common.white.main,
      padding: `${constants.generalUnit}px ${constants.generalUnit * 1.5}px`,
    },
    contents: {
      padding: `${constants.generalUnit}px ${constants.generalUnit * 5}px`,
      backgroundColor: String(palette.additional.grayLight),
    },
  });
});

interface IFormView {
  heading: string;
  className?: string;
  children: ReactNode | ReactNode[];
}

const FormView: React.FC<IFormView> = ({
  children,
  className,
  heading,
}: IFormView) => {
  const classes = useStyles();

  return (
    <section className={clsx(classes.root, className)}>
      <header className={classes.header}>
        <Typography>{heading}</Typography>
      </header>
      <div className={classes.contents}>{children}</div>
    </section>
  );
};

export default FormView;
