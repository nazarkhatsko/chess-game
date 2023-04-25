import path from "path";
import { Artifacts } from "hardhat/types";

export async function getContracts(
  artifacts: Artifacts,
  basepath = "contracts",
  extra: string[] = ["Provider", "Connect"]
): Promise<string[]> {
  return (await artifacts.getAllFullyQualifiedNames())
    .filter((name) => name.startsWith(basepath)) // Only files in basepath directory
    .map((name) => name.split(":")[1]) // Get contract name
    .filter((name, _, names) => names.indexOf(name.slice(1)) === -1) // Only contracts
    .filter((name) => extra.indexOf(name) === -1); // Remove extra contracts
}

export async function getContractInterfaces(
  artifacts: Artifacts,
  basepath = "contracts",
  extra: string[] = ["IProvider", "IConnect"]
): Promise<string[]> {
  return (await artifacts.getAllFullyQualifiedNames())
    .filter((name) => name.startsWith(basepath)) // Only files in basepath directory
    .map((name) => name.split(":")[1]) // Get contract name
    .filter((name, _, names) => names.indexOf(name.slice(1)) !== -1) // Only interfaces
    .filter((name) => extra.indexOf(name) === -1); // Remove extra contracts
}

export async function getContractPaths(
  artifacts: Artifacts,
  basepath = "contracts"
): Promise<string[]> {
  return (await artifacts.getAllFullyQualifiedNames())
    .filter((name) => name.startsWith(basepath)) // Only files in basepath directory
    .map((name) => name.split(":")[0]) // Get contract path
    .filter(
      (name, _, names) =>
        names.indexOf(
          path.join(path.dirname(name), path.basename(name).slice(1))
        ) === -1
    ); // Only contracts paths
}

export async function getContractInterfacePaths(
  artifacts: Artifacts,
  basepath = "contracts"
): Promise<string[]> {
  return (await artifacts.getAllFullyQualifiedNames())
    .filter((name) => name.startsWith(basepath)) // Only files in basepath directory
    .map((name) => name.split(":")[0]) // Get interface path
    .filter(
      (name, _, names) =>
        names.indexOf(
          path.join(path.dirname(name), path.basename(name).slice(1))
        ) !== -1
    ); // Only interfaces paths
}
