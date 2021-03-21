import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, ITheme } from "@chainsafe/common-theme";
import {
  ERC721Metadata,
  useChainbridge,
} from "../../Contexts/ChainbridgeContext";
import { Button, Typography } from "@chainsafe/common-components";
import { useWeb3 } from "@chainsafe/web3-context";
import { Erc721, Erc721Factory } from "@chainsafe/chainbridge-contracts";
import { utils } from "ethers";
import NetworkSlide, { Network } from "./TransferSlides/NetworkSlide";
import SelectSlide from "./TransferSlides/SelectSlide";
import ConfirmSlide from "./TransferSlides/ConfirmSlide";

const useStyles = makeStyles(({ constants, palette }: ITheme) =>
  createStyles({
    root: {},
    walletArea: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    connecting: {
      textAlign: "center",
      marginBottom: constants.generalUnit * 2,
    },
    connectButton: {
      margin: `${constants.generalUnit * 3}px 0 ${constants.generalUnit * 6}px`,
    },
    connected: {
      width: "100%",
      "& > *:first-child": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      },
    },
    changeButton: {
      cursor: "pointer",
    },
    networkName: {
      padding: `${constants.generalUnit * 2}px ${
        constants.generalUnit * 1.5
      }px`,
      border: `1px solid ${palette.additional["gray"][6]}`,
      borderRadius: 2,
      color: palette.additional["gray"][9],
      marginTop: constants.generalUnit,
      marginBottom: constants.generalUnit * 3,
    },
  })
);

const TransferPage = () => {
  const classes = useStyles();

  const {
    isReady,
    checkIsReady,
    wallet,
    onboard,
    provider,
    address,
  } = useWeb3();

  const { homeChain, deposit } = useChainbridge();

  const [walletConnecting, setWalletConnecting] = useState(false);

  const handleConnect = async () => {
    setWalletConnecting(true);
    !wallet && (await onboard?.walletSelect());
    await checkIsReady();
    setWalletConnecting(false);
  };

  const [erc721, setErc721] = useState<Erc721>();

  useEffect(() => {
    if (provider && address && homeChain && !erc721) {
      const connect = async () => {
        const setup = await Erc721Factory.connect(
          homeChain.tokens[0].address,
          provider
        );
        setErc721(setup);
      };
      connect();
    }
  }, [provider, address, homeChain, erc721]);

  const [tokens, setTokens] = useState<ERC721Metadata[]>([]);

  useEffect(() => {
    if (homeChain && erc721 && address) {
      const fetch = async () => {
        const ownerBalance = parseInt(
          utils.formatUnits(await erc721.balanceOf(address), 0)
        );

        let newTokens: ERC721Metadata[] = [];
        for (let i = 0; i < ownerBalance; i++) {
          let ownerIndex = await erc721.tokenOfOwnerByIndex(
            address,
            utils.parseUnits(`${i}`, 0)
          );
          newTokens.push({
            id: ownerIndex.toHexString(),
            category: "Art",
            collection: "Test",
            image: "",
            name: "pooch",
            lastPrice: 12,
            rarity: 1,
          });
        }
        setTokens(newTokens);
        console.log(newTokens);
      };
      fetch();
    }
  }, [erc721, address, homeChain]);

  const [slide, setSlide] = useState<"network" | "select" | "confirm">(
    "network"
  );
  const [targetData, setTargetData] = useState<{
    targetAddress: string;
    targetNetwork: Network;
  }>();
  // TODO: Get current network
  const [targetNFT, setTargetNFT] = useState<ERC721Metadata>();

  const [blocker, setBlocker] = useState<"closed" | "approve" | "confirm">();

  return (
    <article className={classes.root}>
      {slide === "network" ? (
        <NetworkSlide
          currentNetwork="Görli"
          submit={(targetNetwork: Network, targetAddress: string) => {
            setTargetData({
              targetAddress,
              targetNetwork,
            });
            setSlide("select");
          }}
        />
      ) : slide === "select" ? (
        <SelectSlide
          back={() => {
            setSlide("network");
          }}
          submit={setTargetNFT}
          nfts={tokens}
        />
      ) : (
        <ConfirmSlide
          back={() => setSlide("select")}
          nft={targetNFT as ERC721Metadata}
          submit={() => {
            setBlocker("approve");
            if (targetData) {
              deposit(
                targetData?.targetAddress,
                homeChain?.tokens[0].address || "",
                undefined,
                targetNFT?.id
              );
            }
          }}
        />
      )}

      <div className={classes.walletArea}>
        {!isReady ? (
          <Button
            className={classes.connectButton}
            fullsize
            onClick={() => {
              handleConnect();
            }}
          >
            Connect Metamask
          </Button>
        ) : walletConnecting ? (
          <section className={classes.connecting}>
            <Typography component="p" variant="h5">
              This app requires access to your wallet, <br />
              please login and authorize access to continue.
            </Typography>
          </section>
        ) : (
          <section className={classes.connected}>
            <div>
              <Typography variant="body1">Home network</Typography>
            </div>
            <Typography
              component="h2"
              variant="h2"
              className={classes.networkName}
            >
              {homeChain?.name}
            </Typography>
            <Typography>{tokens ? tokens.length : "buffering"}</Typography>
            {address && homeChain && tokens && (
              <Button
                onClick={() =>
                  deposit(
                    address,
                    homeChain?.tokens[0].address,
                    undefined,
                    tokens[0].id
                  )
                }
                type="button"
                variant="primary"
              >
                Transfer
              </Button>
            )}
          </section>
        )}
      </div>
    </article>
  );
};
export default TransferPage;
