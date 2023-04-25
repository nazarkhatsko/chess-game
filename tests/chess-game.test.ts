import { ethers } from "hardhat";
import { expect } from "chai";
// import { DSPool } from "../typechain-types";

describe("ChessGame Test", () => {
  // Signers
  // let adminSigner: ethers.Signer;
  // let aSigner: ethers.Signer;
  // let bSigner: ethers.Signer;

  // // Contracts
  // let poolContract: DSPool;

  // beforeEach(async () => {
  //   // Get signers
  //   [adminSigner, aSigner, bSigner] = await ethers.getSigners();

  //   // Deploy contracts
  //   poolContract = (await ethers.deployContract("DSPool", [[]], adminSigner)) as DSPool;
  // });

  // it("Test setIsLock", async () => {
  //   // Data
  //   const isLock = await poolContract.isLock();

  //   // Set !isLock
  //   await poolContract.setIsLock(!isLock);
  //   expect(await poolContract.isLock()).to.eq(!isLock);

  //   // Set isLock
  //   await poolContract.setIsLock(isLock);
  //   expect(await poolContract.isLock()).to.eq(isLock);
  // });

  // it("Test setWinner", async () => {
  //   // Data
  //   const winner = aSigner.getAddress();

  //   // Set isLock false
  //   await poolContract.setIsLock(false);

  //   // Set winner true
  //   await poolContract.setWinner(winner, true);
  //   const isWinner1 = await poolContract.isWinner(winner);
  //   expect(isWinner1).to.eq(true);

  //   // Set winner false
  //   await poolContract.setWinner(winner, false);
  //   const isWinner2 = await poolContract.isWinner(winner);
  //   expect(isWinner2).to.eq(false);
  // });

  // it("Test getPrizeAmount", async () => {
  //   // Data
  //   const prize = ethers.utils.parseEther("10");
  //   const winners = [aSigner, bSigner];

  //   // Set isLock false
  //   await poolContract.setIsLock(false);

  //   // Send prize to pool
  //   await adminSigner.sendTransaction({
  //     to: poolContract.address,
  //     value: prize,
  //   });

  //   // Check if pool has prize
  //   const poolContractBalance = await ethers.provider.getBalance(poolContract.address);
  //   expect(poolContractBalance).to.eq(prize);

  //   // Set winners true
  //   for (const winner of winners) {
  //     await poolContract.setWinner(winner.getAddress(), true);
  //   }

  //   // Get prize amount
  //   const prizeAmount = await poolContract.getPrizeAmount();
  //   expect(prizeAmount).to.eq(prize.div(winners.length));
  // });

  // it("Test takePrize", async () => {
  //   // Data
  //   const prize = ethers.utils.parseEther("10");
  //   const winners = [aSigner, bSigner];

  //   // Set isLock false
  //   await poolContract.setIsLock(false);

  //   // Send prize to pool
  //   await adminSigner.sendTransaction({
  //     to: poolContract.address,
  //     value: prize,
  //   });

  //   // Check if pool has prize
  //   const poolContractBalance = await ethers.provider.getBalance(poolContract.address);
  //   expect(poolContractBalance).to.eq(prize);

  //   // Set winners true
  //   for (const winner of winners) {
  //     await poolContract.setWinner(winner.getAddress(), true);
  //   }

  //   // Save signers balance
  //   const winnersBalance = [];
  //   for (const winner of winners) {
  //     winnersBalance.push(await winner.getBalance());
  //   }

  //   // Take prize
  //   for (const winner of winners) {
  //     await poolContract.connect(winner).takePrize();
  //   }

  //   // Check if pool has prize
  //   for (let i = 0; i < winners.length; i++) {
  //     const winnerBalance = await winners[i].getBalance();
  //     expect(winnerBalance.sub(winnersBalance[i])).to.eq(prize.div(winners.length));
  //   }

  //   // Check if winners are false
  //   for (const winner of winners) {
  //     const isWinner = await poolContract.isWinner(winner);
  //     expect(isWinner).to.eq(false);
  //   }
  // });
});
