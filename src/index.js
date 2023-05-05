import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Contest from "./components/Contest";
import CreateTeam from "./components/CreateTeam";
import ContestCreation from "./components/ContestCreation";
import CurrentContest from "./components/CurrentContest";
import LeaderBoard from "./components/LeaderBoard";
import Metastart from "./components/Metastart";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  polygonMumbai,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum, polygonMumbai],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "b982135af83fedf034f1a3342b2ac863",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Router>
          <Link to="/" element={<App />} />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contest" element={<Contest />} />
            <Route path="/createTeam/:match_id" element={<CreateTeam />} />
            <Route path="/createContest" element={<ContestCreation />} />
            <Route
              path="/currentContest/:contestname"
              element={<CurrentContest />}
            />
            <Route path="/leaderBoard" element={<LeaderBoard />} />
            <Route path="/work" element={<Metastart />} />
          </Routes>
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  </>
);
