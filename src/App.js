import "./App.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ABI } from "./contract";
import { Web3Button } from "@web3modal/react";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

function App() {
  const ADDRESS = "0x6E252B16683DA414aD735ff4ED0C371Fe6B45e2a";
  const [contract, setContract] = useState();

  const navigate = useNavigate();

  const [name, setName] = useState();

  const chains = [arbitrum, mainnet, polygon];
  const projectId = "b982135af83fedf034f1a3342b2ac863";

  const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    provider,
  });
  const ethereumClient = new EthereumClient(wagmiClient, chains);

  // Creating a function to connect user's wallet

  // useEffect(() => {
  //   const checkForPlayerToken = async () => {
  //     const playerExists = await contract.isPlayer(gotAccount);
  //     const playerTokenExists = await contract.isPlayerToken(gotAccount);
  //     console.log({ playerExists, playerTokenExists });
  //     if (playerExists && playerTokenExists) {
  //       navigate("/create-battle");
  //     }
  //   };

  //   if (contract) checkForPlayerToken();
  // }, [contract]);
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <div className="">
          <div className="fixed top-0">
            <div className="text-white m-0 p-0">
              <div className="flex justify-between pt-6 pl-5 ml-[100px] mr-[75px] pr-[30px]">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/111877553/232271079-d06d3ac4-daa1-453a-a51b-3d6b1b73f043.png"
                    className="bg-contain w-12 h-12 rounded-full"
                    alt="icon"
                  />
                </div>
                <div className="flex gap-3">
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end px-7 py-4 bg-[#06002e]">
            {/* <button
            className="items-center m-5  bg-white rounded-full font-medium  p-4 shadow-lg"
            onClick={() => {
              // Calling the connectWallet function when user clicks on the button
              connectWallet();
            }}
          >
            {gotAccount && <span>{slicedAccount.slice(0, 5)}</span>}
            {!gotAccount && <span>Connect Wallet</span>}
          </button> */}
            <HomePage />
          </div>
        </div>
        <div className=" App flex justify-center items-center font-Decalotype">
          <div>
            <div className="">
              <h1 className="font-bold text-[50px] p-3 text-white">
                It is Dream11, but{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-indigo-600 bg-clip-text text-transparent">
                  Decentralized
                </span>{" "}
              </h1>{" "}
            </div>
            <div className="text-white flex justify-center p-3">
              <h2 className="font-semibold text-[30px] ">
                Get started by creating your dream team
              </h2>{" "}
            </div>
            <div className="text-white flex justify-center">
              <h2 className="p-3 font-bold ">
                You can get a chance to win 1 BTC 🚀
              </h2>
            </div>

            <div className="flex flex-col justify-center items-center mt-6">
              <label className="text-white text-[25px] px-4 text-center py-5">
                Enter your name:{" "}
              </label>
              <input
                type="text"
                placeholder="Type here"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered text-center input-primary w-full h-[34px] max-w-xs rounded-sm placeholder:px-3"
              />

              <center className="pt-4">
                <Link to="/contest">
                  {" "}
                  <button
                    className="items-center m-5  bg-white rounded-full font-medium  py-2 px-4 hover:bg-red-600 hover:text-white shadow-lg"
                    type="submit"
                  >
                    Submit
                  </button>
                </Link>
              </center>
            </div>
          </div>
        </div>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

function HomePage() {
  return <Web3Button />;
}

export default App;
