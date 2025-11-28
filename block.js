export class Block {
  constructor(blockNumber, data, previousHash = "") {
    this.blockNumber = blockNumber;   // Sıra numarası
    this.data = data;                 // { letter, sender, openDate }
    this.previousHash = previousHash; // Şimdilik boş
    this.timestamp = new Date().toISOString();
  }
}