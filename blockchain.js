import chalk from "chalk";
import { Block } from "./block.js";

export class Blockchain {
  constructor() {
    this.chain = []; // blokları tutacak boş liste
  }

  addBlock(data) {
    const blockNumber = this.chain.length + 1;
    const previousHash = this.chain.length ? "hash-placeholder" : "0"; // hash sonradan
    const newBlock = new Block(blockNumber, data, previousHash);
    this.chain.push(newBlock);
    return newBlock;
  }

  printChain() {
    console.log(chalk.blue.bold("\n🔗 Blockchain Zinciri:"));
    this.chain.forEach((block) => {
      console.log(chalk.green(`\nBlok #${block.blockNumber}`));
      console.log("Tarih:", block.timestamp);
      console.log("Önceki Hash:", block.previousHash);
      console.log("Veri:", block.data);
    });
  }
}
console.log("değiştirdim.");
console.log("son kez.");