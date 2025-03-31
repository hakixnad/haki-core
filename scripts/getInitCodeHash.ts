import { ethers } from "hardhat";
import dotenv from "dotenv";

dotenv.config();

async function getInitCodePairHash() {
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC as string);

    if (!process.env.PRIVATE_KEY) {
        throw new Error("PRIVATE_KEY is not defined in the environment variables");
    }
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const factoryAddress = process.env.FACTORY;
    console.log(factoryAddress);

    const factory = await ethers.getContractAt("HakiswapV2Factory", factoryAddress, wallet);

    const initCodePairHash = await factory.INIT_CODE_PAIR_HASH();
    console.log("INIT_CODE_PAIR_HASH:", initCodePairHash);
}

getInitCodePairHash()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });