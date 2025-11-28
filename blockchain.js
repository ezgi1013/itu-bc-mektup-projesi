import chalk from "chalk";
import crypto from "crypto";
import { Block } from "./block.js";



export class Blockchain {
  constructor() {
    this.chain = []; 
    this.createGenesisBlock();
  }


  createGenesisBlock(data) {
    const genesis = new Block(1, "Genesis Block" ,"0");
    this.chain.push(genesis);
  }




  addBlock(data) {
    const blockNumber = this.chain.length + 1;
    const hash = crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex');
    const previousHash = this.chain[this.chain.length - 1].hash;
    const newBlock = new Block(blockNumber, data, previousHash);
    this.chain.push(newBlock);
    return newBlock;
  }

  printChain() {
    console.log(chalk.blue.bold("\n🔗 Blockchain Zinciri:"));
    this.chain.forEach((block) => {
      console.log(chalk.green(`Blok #${block.blockNumber -1}`));
      console.log("Tarih:", block.timestamp);
      console.log("Önceki Hash:", block.previousHash);
      console.log("Şimdiki Hash:", block.hash);

      if (!block.data || !block.data.openDate) {
    console.log(`Açılma tarihi yok, atlandı.`);
    return;
  }

      const timeNow = new Date()
      const timeLetter = new Date(block.data.openDate.replace(" ","T"))
      
      if(timeLetter <= timeNow){
        console.log("Veri:", block.data);
      }else {
        console.log("Mektup açılma tarihi daha gelmedi.");
      }
    });
  }
}