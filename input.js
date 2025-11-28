import inquirer from "inquirer";
import chalk from "chalk";

import { Blockchain } from "./blockchain.js";
import { Block } from "./block.js";

export async function runInput() {
let a = true;
let b = true;
let confirmed = false;
let answersPassword;
const myChain = new Blockchain();



while(!confirmed){
  answersPassword = await inquirer.prompt([
  {
    type: "password",
    name: "password1",
    message: chalk.blueBright("Şifre belirleyiniz:") 
  },
  {
    type: "password",
    name: "password2",
    message: chalk.blueBright("Şifreyi tekrar giriniz:")
  }
]);
  if(answersPassword.password1 == answersPassword.password2){
  console.log(chalk.greenBright("Şifreler eşleşti!"));
  confirmed = true;
} else {
  console.log(chalk.red("Şifreler eşleşmiyor, lütfen tekrar deneyiniz."));
    
}}
 
const pass = answersPassword.password1;


while(a){
    const answers = await inquirer.prompt([
    {  type: "input",
       name: "letter",
       message: chalk.yellow("Mektubu yazınız:")
    },
    { type: "input",
      name: "sender",
    message: chalk.cyan("Gönderenin ismi:")
    },
    {
        type: "input",
        name: "openDate",
        message: chalk.magenta("Açılma tarihini giriniz (YYYY-MM-DDTHH:mm):"),
        validate: (input) => {
      
      const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
      if (!regex.test(input)) {
        return "❌ Format yanlış! Örnek: 2025-12-05 18:30";
      }

      
      const date = new Date(input.replace(" ", "T"));
      if (isNaN(date.getTime())) {
        return "❌ Geçersiz tarih! Lütfen doğru bir tarih giriniz.";
      }

      const now = new Date(); 
    if (date <= now) {
    return "❌ Geçmiş bir tarih giremezsiniz! Gelecek bir zaman yazmalısınız.";
  }

      return true; 
    }
      },
]);
  
const newBlock = myChain.addBlock(answers);
console.log(chalk.bgGray(`\n✅ Blok #${newBlock.blockNumber} eklendi!`));



 const continue1 = await inquirer.prompt([
  {
        type: "input",
        name: "continue",
        message: chalk.yellowBright("Yeni veri eklemek ister misiniz?(evet/hayır)"),
        validate: (input) => {
            if(input.toLowerCase() === "evet" || input.toLowerCase() === "hayır"){
                return true;
            } else {
                return "Lütfen 'evet' veya 'hayır' olarak cevaplayınız.";
            }

    }
        
        
    },]);


    if(continue1.continue.toLowerCase() === "evet"){        
        console.log("Yeni mektup yazınız.");
    } else {
      a = false;
      while(b){
        const passWant= await inquirer .prompt([
        {
            type: "password",
            name: "passwordCheck",
            message: chalk.blueBright( "Şifrenizi giriniz:")
        }
      ]);
        if(passWant.passwordCheck === pass){
          b = false;
          console.log(chalk.green("Şifre doğru, blockchain zinciri görüntüleniyor..."));
          myChain.printChain();
      }      
        else {
          console.log("❌ Yanlış şifre, lütfen tekrar deneyiniz.");
          b = true;
          }
        
        
    }};}}
