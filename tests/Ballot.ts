import { ethers } from "hardhat";
import { Ballot } from "../typechain-types";

const PROPOSALS = ["Proposal 1", "Proposal 2", "Proposal 3", "Proposal 4"];

describe("BAllot", () => {
  let ballotContract: Ballot;

  beforeEach(async () => {
    const ballotContractFactory = await ethers.getContractFactory("Ballot");
    ballotContract = await ballotContractFactory.deploy(["A", "B", "C"]);
  });

  describe("when the contract is deployed", () => {
    it("has the provided proposals", () => {});
    it("Sets deployer address as the chairperson", () => {});
    it("Sets chairperson vote weight of 1", () => {});
  });
});
