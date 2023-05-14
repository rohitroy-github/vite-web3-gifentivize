const main = async () => {
  try {
    const Transactions = await hre.ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy();

    await transactions.deployed();

    console.log(
      "Transactions successfully deployed to : ",
      transactions.address
    );
  } catch (error) {
    console.error("Error deploying contract : ", error);
    process.exit(1);
  }
};

const runMainFunction = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error("Unhandled error:", error);
    process.exit(1);
  }
};

runMainFunction();
