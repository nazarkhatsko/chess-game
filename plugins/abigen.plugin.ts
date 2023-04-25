import { extendEnvironment, task } from "hardhat/config";
import { getContracts } from "../utils/contracts.util";
import { mkdir, write } from "../utils/filesystem.util";

interface ApigenConfig {
  outDir: string;
}

declare module "hardhat/types/config" {
  interface HardhatUserConfig {
    abigen?: Partial<ApigenConfig>;
  }

  interface HardhatConfig {
    abigen: ApigenConfig;
  }
}

extendEnvironment((hre) => {
  const { config } = hre;
  const { abigen } = config;

  hre.config.abigen = {
    outDir: abigen.outDir || "abis",
  };
});

task("abigen", async (args, hre) => {
  const { config, artifacts } = hre;
  const { abigen } = config;
  const { outDir } = abigen;

  mkdir(outDir);
  const contractNames = await getContracts(artifacts);
  for (const contractName of contractNames) {
    const artifact = await artifacts.readArtifact(contractName);
    const abi = JSON.stringify(artifact.abi, null, 2);
    write(`${outDir}/${contractName}.json`, abi);
  }
});
