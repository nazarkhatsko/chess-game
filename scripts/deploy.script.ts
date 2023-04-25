import { ethers } from "ethers";
import { program } from "commander";
import { read } from "../utils/filesystem.util";

async function main(): Promise<void> {
  const opts = program
    .requiredOption("-u, --provider-url <url>", "provider to deploy to")
    .requiredOption(
      "-p, --private-key <key>",
      "private key to use for deployment"
    )
    .option("-a --args <json>", "arguments to pass to contract")
    .option("-i --abi-path <path>", "path to abi file")
    .option("-b --bytecode-path <path>", "path to bytecode file")
    .parse(process.argv)
    .opts();

  const { providerUrl, privateKey, args, abiPath, bytecodePath } = opts;

  const provider = new ethers.providers.JsonRpcProvider(providerUrl);
  const wallet = new ethers.Wallet(privateKey, provider);

  const contractFactory = new ethers.ContractFactory(
    read(abiPath),
    read(bytecodePath),
    wallet
  );
  const contract = await contractFactory.deploy(...JSON.parse(args || "[]"));
  await contract.deployed();

  console.log(`Contract deployed to ${contract.address}`);
}

main();
