import { Button, SelectInput, TextInput } from "@chainsafe/common-components";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import clsx from "clsx";
import React, { useState } from "react";
import FormView from "../../FormView";

const useStyles = makeStyles(
  ({ animation, constants, palette, typography }: ITheme) => {
    return createStyles({
      root: {
        margin: "0 auto",
        width: "80vw",
        maxWidth: 580,
      },
      button: {
        margin: "20px auto",
        backgroundColor: String(palette.additional.pink),
      },
      input: {
        width: "100%",
        borderRadius: 5,
        margin: "38px 0",
        "& input": {
          borderRadius: 5,
          width: "100%",
          border: " 1px solid #888888",
          padding: `${constants.generalUnit}px ${
            constants.generalUnit * 1.5
          }px`,
        },
      },
      select: {
        "& > div": {
          borderRadius: 5,
          border: `1px solid #888888`,
        },
      },
      label: {
        ...typography.h5,
      },
    });
  }
);

interface INetworkSlide {
  currentNetwork: Network;
  className?: string;
  submit: (targetNetwork: Network, targetAddress: string) => void;
}

export type Network = "Kotti" | "Görli";

const NetworkSlide: React.FC<INetworkSlide> = ({
  currentNetwork,
  className,
  submit,
}: INetworkSlide) => {
  const classes = useStyles();

  const [targetNetwork, setTargetNetwork] = useState<"Kotti" | "Görli">();
  const [targetAddress, setTargetAddress] = useState<string>("");

  return (
    <FormView className={clsx(classes.root, className)} heading="Transfer NFT">
      <TextInput
        className={classes.input}
        labelClassName={classes.label}
        onChange={() => {}}
        label="Origin network"
        disabled
        value={`Ethereum - ${currentNetwork}`}
      />
      <SelectInput
        className={classes.select}
        label="Destination network"
        onChange={(option) => {
          console.log(option);
          setTargetNetwork(option);
        }}
        options={[
          currentNetwork === "Görli"
            ? {
                label: "Kotti",
                value: "Kotti",
              }
            : {
                label: "Görli",
                value: "Görli",
              },
        ]}
      />
      <TextInput
        className={classes.input}
        label="Destination address"
        labelClassName={classes.label}
        placeholder="Enter receiving address"
        onChange={(value) => setTargetAddress(String(value))}
      />
      <div>
        <Button
          onClick={() =>
            submit(targetNetwork as Network, String(targetAddress))
          }
          variant="primary"
          className={classes.button}
          size="large"
          disabled={!targetNetwork || targetAddress.length !== 42}
        >
          Select NFT
        </Button>
      </div>
    </FormView>
  );
};

export default NetworkSlide;
