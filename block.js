export class Block {
  constructor(blockNumber, data, previousHash = "") {
    this.blockNumber = blockNumber;   
    this.data = data;                 
    this.previousHash = previousHash; 
    this.timestamp = new Date().toISOString();
  }
}