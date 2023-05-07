import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css";
import { endgame } from "../BlockchainServices.js";

const LeaderBoard = ({ contestName, performance }) => {
  const [finished, setfinished] = useState(false);
  const handleEnd = async () => {
    console.log("ending");
    const res = await endgame({ contestName, performance });
    console.log(res);
    if (res) {
      setfinished(true);
    }
  };
  return (
    <div className=" h-full">
      <div className="text-white">
        <button
          className="py-2 px-6 rounded border border-blue-400 bg-blue-900"
          onClick={handleEnd}
        >
          {!finished ? "Result" : "Match isn't over yet! "}
        </button>
      </div>
    </div>
  );
};

export default LeaderBoard;
