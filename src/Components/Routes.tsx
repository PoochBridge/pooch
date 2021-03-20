import React from "react";
import {
  Switch,
  Route,
  Redirect,
  ConditionalRoute,
} from "@chainsafe/common-components";
import TransferPage from "./Pages/TransferPage";
import WelcomePage from "./Pages/WelcomePage";
import { useWeb3 } from "@chainsafe/web3-context";

export const ROUTE_LINKS = {
  Welcome: "/welcome",
  Transfer: "/transfer",
};

const FilesRoutes = () => {
  const { wallet, isReady } = useWeb3();

  const isAuthorized = wallet && isReady;

  return (
    <Switch>
      <ConditionalRoute
        redirectPath={ROUTE_LINKS.Transfer}
        isAuthorized={!isAuthorized}
        exact
        path={ROUTE_LINKS.Welcome}
        component={WelcomePage}
      />
      <ConditionalRoute
        redirectPath={ROUTE_LINKS.Welcome}
        isAuthorized={isAuthorized}
        exact
        path={ROUTE_LINKS.Transfer}
        component={TransferPage}
      />
      <Route exact path="/">
        <Redirect to={ROUTE_LINKS.Welcome} />
      </Route>
    </Switch>
  );
};

export default FilesRoutes;
