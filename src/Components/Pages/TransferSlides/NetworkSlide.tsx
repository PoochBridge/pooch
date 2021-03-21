import { Button, SelectInput, TextInput } from "@chainsafe/common-components";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import React, { useState } from "react";
import FormView from "../../FormView";

const useStyles = makeStyles(({ animation, constants, palette }: ITheme) => {
  return createStyles({
    root: {},
  });
});

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
    <FormView className={className} heading="Transfer NFT">
      <TextInput
        onChange={() => {}}
        label="Origin network"
        disabled
        value={`Ethereum - ${currentNetwork}`}
      />
      <SelectInput
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
        label="Destination address"
        onChange={(value) => setTargetAddress(String(value))}
      />
      <Button
        onClick={() => submit(targetNetwork as Network, String(targetAddress))}
        variant="primary"
        size="large"
        disabled={!targetNetwork || targetAddress.length !== 42}
      >
        Select NFT
      </Button>
    </FormView>
  );
};

export default NetworkSlide;
