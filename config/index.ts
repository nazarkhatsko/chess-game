import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

function getEnvVariable<T>(
  envVariable: string,
  isRequired?: boolean,
  defaultValue?: T
): T {
  const value = process.env[envVariable];
  if (!value && isRequired) {
    console.log(`The environment variable $${envVariable} is not initialized`);
    process.exit(1);
  } else if (!value && defaultValue) {
    return defaultValue;
  }
  return value as T;
}

export const ALCHEMY_API_KEY = getEnvVariable<string>("ALCHEMY_API_KEY", true);
export const ETHERSCAN_API_KEY = getEnvVariable<string>(
  "ETHERSCAN_API_KEY",
  true
);
export const COINMARKETCAP_API_KEY = getEnvVariable<string>(
  "COINMARKETCAP_API_KEY",
  true
);
