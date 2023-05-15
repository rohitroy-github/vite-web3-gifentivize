import React, {useContext} from "react";

import {TransactionContext} from "../context/TransactionContext";

import useFetch from "../hooks/useFetch";

// fetching dummy data for initial testing purpose
// import dummyData from "../utils/dummyData";

import {shortenAddress} from "../utils/shortenAddress";

// design for individual transaction card
const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const gifUrl = useFetch({keyword});

  return (
    <div
      className="bg-[#181918] m-5 flex flex-1
    2xl:min-w-[300px]
    2xl:max-w-[350px]
    sm:min-w-[250px]
    sm:max-w-[250px]
    min-w-full
    flex-col p-5 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full">
        <div className="w-full mb-6 p-2">
          {/* click > see transaction details through etherscan */}
          <a
            href={`https://sepolia.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white text-base">
              From: {shortenAddress(addressFrom)}
            </p>
          </a>
          <a
            href={`https://sepolia.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white text-base">
              To: {shortenAddress(addressTo)}
            </p>
          </a>
          <p className="text-white text-base">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-white text-base">Message: {message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="gif"
          className="w-full h-50 2xl:h-80 rounded-md shadow-lg object-cover"
        />
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const {transactions, currentAccount} = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest transactions recorded on chain ...
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your metamask to see the latest transactions on chain.
          </h3>
        )}

        {/* looping over the list of transactions  */}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {[...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}

          {/* when rendering dummy data for checking purposes 
          {[...dummyData].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
