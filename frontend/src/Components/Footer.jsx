// Footer file >>>

import React from "react";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex md:flex-row flex-col justify-evenly items-center my-4">
      <div className="flex flex-[0.6] justify-center items-center">
        <h3 className="text-2xl sm:text-3xl text-white text-gradient">
          Gifentivize
        </h3>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap w-full mt-5 md:mt-2">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <a href="https://coinmarketcap.com/">CoinMarketCap</a>
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <a href="https://wazirx.com/invite/vpxbjhfy">WazirX</a>
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <a href="https://www.binance.com/en-IN/activity/referral-entry/CPA?fromActivityPage=true&ref=CPA_00SPT3IAOM">
            Binance
          </a>
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <a href="https://github.com/rohitroy-github/react-ModernCryptoTransact">
            Github
          </a>
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <a href="https://metamask.io/">MetaMask</a>
        </p>{" "}
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        Come join us in this new WEB3 journey !
      </p>
      <p className="text-white text-sm text-center font-medium mt-2">
        {" "}
        {/* rht.tech@gmail.com */}
        React | Blockchain | Web3 | MetaMask | HardHat
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">Rohit Roy</p>
      <p className="text-white text-right text-xs">
        All rights reserved | 2022
      </p>
    </div>
  </div>
);

export default Footer;
