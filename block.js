import crypto from "crypto";



export class Block {
  constructor(blockNumber, data, previousHash = "") {
    this.blockNumber = blockNumber;   
    this.data = data;                 
    this.previousHash = previousHash; 
    this.timestamp = new Date().toISOString();
    this.hash = this.calculateHash();
  }
  calculateHash() {
  return crypto
    .createHash("sha256")
    .update(
      this.blockNumber +
      this.previousHash +
      this.timestamp +
      JSON.stringify(this.data)
    )
    .digest("hex");
}

}