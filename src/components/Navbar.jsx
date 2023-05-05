import React, { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./nav.css";
const Navbar = ({ handleConnect }) => {
  const [account, setAccount] = useState();

  return (
    <>
      <div className="text-white m-0 p-0 app12">
        <div className="flex justify-between pt-2 pl-5 ml-[100px] mr-[75px] pr-[30px]">
          <div>
            <img
              src="https://github.com/Sunil0881/logo/blob/main/logo-removebg-preview.png?raw=true"
              className="bg-contain w-12 h-12 rounded-full"
              alt="icon"
            />
          </div>
          <div className="flex gap-3">
            {/* <div className="flex items-center ">
              <AiOutlineBell className="w-7 h-7 text-[#B48325]" />
            </div> */}
            <div></div>

            <div>
              {/* <button className=" border border-[#B48325] text-[#B48325] rounded-full py-1.5 px-4 flex items-center justify-center">
                    0x12rrygisdi
                  </button> */}
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
