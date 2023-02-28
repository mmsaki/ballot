import { ethers } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

const PROPOSALS = ["Proposal 1", "Proposal 2", "Proposal 3"];

function convertStringArrayToBytes32(array: string[]) {
  const bytes32Array = [];
  for (let index = 0; index < array.length; index++) {
    bytes32Array.push(ethers.utils.formatBytes32String(array[index]));
  }
  return bytes32Array;
}

async function main() {
  const privateKey = process.env.PRIVATE_KEY;

  const provider = new ethers.providers.AlchemyProvider(
    "goerli",
    process.env.ALCHEMY_API_KEY
  );

  const wallet = new ethers.Wallet(privateKey);
  const signer = wallet.connect(provider);

  const balance = signer.getBalance();

  const args = process.argv;
  const proposals = args.slice(2);

  console.log("Deploying Bollot contract...");
  console.log("Proposals: ");
  PROPOSALS.forEach((element, index) => {
    console.log(`Proposal N. ${index + 1}: ${element}`);
  });
  const ballotContractFactory = await ethers.getContractFactory("Ballot");
  const ballotContract = await ballotContractFactory.deploy(["A", "B", "C"]);

  // TODO
  console.log();
  console.log();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
