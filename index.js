import inquirer from "inquirer";
import chalk from "chalk";
import { runInput } from "./input.js";
import { Blockchain } from "./blockchain.js";
import { Block } from "./block.js";
import crypto from "crypto";


console.log(chalk.bgCyanBright("💌 Blockchain Mektup Sistemine Hoşgeldiniz!"));
runInput();

  