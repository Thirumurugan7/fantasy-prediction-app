import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../index.css";
const CurrentContest = () => {
  return (
    <div className="App h-full">
      <Navbar />
      <div className="flex flex-col">
        <div className="flex flex-row gap-3 justify-around mt-[10px] mx-[30px] rounded-3xl pb-6 bg-[#06002E]">
          <div className="flex justify-center items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"
              className="w-[60px] h-12 object-contain"
              alt=""
            />
          </div>
          <div className="text-white">
            <h1 className="font-bold text-[20px]">Indian Premier League T20</h1>
            <center className="m-3 gap-4 p-2 ">
              <h2 className="font-semibold mx-auto pb-3">Vs</h2>
              <h4 className="font-light">Starts at Sun 03:30 PM</h4>
            </center>

            <center className="m-4">
              {" "}
              <h1>Ground: Wankhede, Mumbai</h1>
            </center>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-[60px] h-12 object-contain"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {" "}
        <div className="w-3/4 h-2 bg-[#B48325] rounded-3xl"></div>
      </div>
      <div className="bg-[#aba9a98b] flex flex-col mx-[150px] rounded-2xl">
        <div className="m-3 ml-5 ">
          <h1 className="text-white font-[28px]  font-extrabold">
            Contest by Thiru
          </h1>
        </div>
        <div className="flex text-[#372626] font-bold justify-around m-2 p-4">
          <div className="flex flex-col">
            <div>Price Pool</div>
            <div>0.1 MATIC</div>
          </div>
          <div>
            <div>Spots</div>
            <div>3</div>
          </div>
          <div>
            <div>Entry</div>
            <div>0.0000000001 MATIC</div>
          </div>
        </div>
      </div>
      <center className="p-4 pt-6">
        <input
          type="text"
          className="w-2/5 h-[28px] rounded-3xl placeholder:text-center cursor-pointer"
          placeholder="Copy Invite code : 📁 "
        />
      </center>
      <center className="pb-4">
        <input
          type="text"
          className="w-2/5 h-[28px] rounded-3xl placeholder:text-center cursor-pointer"
          placeholder="More Options 🔗 "
        />
      </center>
      <div className=" fixed bottom-0 left-[42%]    ">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default CurrentContest;
