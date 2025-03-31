import { ethers } from "hardhat";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC as string);
  if (!process.env.PRIVATE_KEY) {
    throw new Error("PRIVATE_KEY is not defined in the environment variables");
  }
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  console.log("Deploying contracts with the account:", wallet.address);

  const UniswapV2Factory = await ethers.getContractFactory("HakiswapV2Factory", wallet);
  const uniswapV2Factory = await UniswapV2Factory.deploy(wallet.address);

  console.log("HakiswapV2Factory deployed to:", uniswapV2Factory.address);
  console.log("HakiswapV2Factory deployed owner:", wallet.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });