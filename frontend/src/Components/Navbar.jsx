import React, {useContext} from "react";
import {useState} from "react";

import {HiMenuAlt4} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";

import {TransactionContext} from "../context/TransactionContext";

//functional component to render all the navbar items
// code reusability
const NavBarItem = ({title, classprops}) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

// useState to check whether mobile-navbar is ON/OFF
const Navbar = () => {
  const {currentAccount, connectWallet} = useContext(TransactionContext);

  useContext(TransactionContext);

  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center sm:justify-around nav-white-glassmorphism">
      <div className="md:w-[75%] sm:w-[90%] flex sm:justify-between p-5 sm:px-10">
        <div className="md:flex-[1] items-left">
          <h3 className="text-2xl sm:text-3xl text-white text-gradient text-left">
            Gifentivize
          </h3>
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial font-semibold	">
          {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}

          {!currentAccount ? (
            <button onClick={connectWallet}>
              {" "}
              <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                Connect Metamask
              </li>
            </button>
          ) : (
            <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
              Connected
            </li>
          )}
        </ul>
        <div className="flex relative">
          {!toggleMenu && (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed -top-0 -right-2 p-3 w-[30vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {/* mapping over array of nav items */}
              {["Market", "Exchange", "Tutorials", "Wallets"].map(
                (item, index) => (
                  <NavBarItem
                    key={item + index}
                    title={item}
                    classprops="my-2 text-lg"
                  />
                )
              )}

              {!currentAccount ? (
                <button onClick={connectWallet}>
                  {" "}
                  <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    Connect
                  </li>
                </button>
              ) : (
                <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                  Connected
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
