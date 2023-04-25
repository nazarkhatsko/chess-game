import { extendEnvironment, task } from "hardhat/config";
import { merge } from "sol-merger";
import { getContracts } from "../utils/contracts.util";
import { mkdir, write } from "../utils/filesystem.util";

interface MergerConfig {
  outDir: string;
}

declare module "hardhat/types/config" {
  interface HardhatUserConfig {
    merger?: Partial<MergerConfig>;
  }

  interface HardhatConfig {
    merger: MergerConfig;
  }
}

extendEnvironment(async (hre) => {
  const { config } = hre;
  const { merger } = config;

  hre.config.merger = {
    outDir: merger.outDir || "merged",
  };
});

task("merger", async (args, hre) => {
  const { artifacts, config } = hre;
  const { merger } = config;
  const { outDir } = merger;

  mkdir(outDir);
  const contractNames = await getContracts(artifacts);
  for (const contractName of contractNames) {
    const artifact = await artifacts.readArtifact(contractName);
    const margedContract = await merge(artifact.sourceName);
    write(`${outDir}/${contractName}.sol`, margedContract);
  }
});
