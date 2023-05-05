import "./App.css";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";

// import {
//   EthereumClient,
//   w3mConnectors,
//   w3mProvider,
// } from "@web3modal/ethereum";
// import { Web3Modal } from "@web3modal/react";
// import {
//   configureChains,
//   createClient,
//   usePrepareContractWrite,
//   WagmiConfig,
// } from "wagmi";
// import { arbitrum, mainnet, polygon } from "wagmi/chains";
// import {
//   UseContractConfig,
//   useAccount,
//   useContractRead,
//   useContractWrite,
//   usePrepareContractWrite,
// } from "wagmi";
import { GetPrice, Register } from "./BlockchainServices";

function App() {
  //const ADDRESS = "0xb976ed289fc21266D302ebBDC1515d8D585a683f";
  // const [contract, setContract] = useState();
  //console.log(congif1.abi);
  const navigate = useNavigate();
  const [name, setName] = useState();
  // const { address } = useAccount();
  const projectId = "b982135af83fedf034f1a3342b2ac863";
  useEffect(() => {}, []);

  // function usehandller() {}
  // const { data: joinFee } = useContractRead({
  //   address: "0xb976ed289fc21266D302ebBDC1515d8D585a683f",
  //   abi: congif1.abi,
  //   functionName: "getJoiningFee",
  //   watch: true,
  // });
  // console.log(joinFee, parseInt(joinFee));
  // const handleRegister = () => {
  //   console.log("register");
  //   console.log(name);
  // };

  // const { config } = usePrepareContractWrite({
  //   address: "0xb976ed289fc21266D302ebBDC1515d8D585a683f",
  //   abi: congif1.abi,
  //   functionName: "register",
  //   args: [address, { value: name }],
  // });

  // const { writeAsync } = useContractWrite(config);

  const RegisterHandler = async () => {
    console.log(name);

    const res = await Register({ name });
    console.log(res);
    if (res) {
      console.log("true");
    }
    navigate("/contest");
  };

  return (
    <>
      <div className="">
        <div className="sticky top-0">
          <Navbar />
        </div>
      </div>
      <div className=" App flex justify-center pt-[50px] items-stretch font-Decalotype">
        <div>
          <div className="">
            <h1 className="font-bold text-[50px] p-3 text-white">
              It is Web3,
              <span className="bg-gradient-to-r from-yellow-500 to-indigo-600 bg-clip-text text-transparent">
                Fantasy Sports prediction Application
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
              <button
                className="items-center m-5  bg-white rounded-full font-medium  py-2 px-4 hover:bg-red-600 hover:text-white shadow-lg"
                type="submit"
                onClick={RegisterHandler}
              >
                Submit
              </button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

// function HomePage() {
//   return <Web3Button />;
// }

export default App;
