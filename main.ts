#! /usr/bin/env node

import { select } from "@inquirer/prompts";
import chalk from "chalk";

//enemies variable

let enemies = ["Skeleton","Zombie","Spider","Creeper"];
let maxEnemyhealth = 75;  //this is enemie's health
let enemyDamageToHero = 25;  // this is the amount of damage to hero

//hero variable
let heroHealth = 100;  //this is heros health
let heroDamageToEnemies = 50;  //this is damage hero can cause to ememies
let numberOfHealthPortion = 3;  //this is health portion which can be used only 3 times
let healthporHealAmount = 30;   //this is portion's capacity to heal 30 will be added to hero's health
let giftHealhPortion = 50;  //this will work when we kill enemy and our health is less then 50 then we will get a free health portion

//base of game
let gameRunning = true;

console.log(chalk.blue.bold("\t WELCOME TO ADVENTURE GAME! \t"));
console.log("-".repeat(70));



Game:
while(gameRunning){
      let enemyHealth = Math.floor(Math.random() * maxEnemyhealth + 20);  //generates any number btw 1 to 75 
      let randomEnemy = Math.floor(Math.random() * enemies.length);  //generates random enemies from array
      let enemy = enemies[randomEnemy];

      console.log(chalk.greenBright.italic(`\t Game Started! \t`));
      console.log("-".repeat(70));

    
      console.log(chalk.redBright(`ALERT :- ${enemy} has appeared!`));




while(enemyHealth > 0){
    console.log(chalk.greenBright.bold(`\n* Hero Health :- ${heroHealth}`));
    console.log(chalk.blueBright.bold(`* ${enemy} Health :- ${enemyHealth}`));

let message1 = await select({
    message : " \n What do you want to do?",
                choices : [{value : "Attack"},{value : "Take Health Portion"},{value : "Run"}]
});



if(message1 === "Attack"){
    let attackDamageToEnemy = Math.floor(Math.random() * heroDamageToEnemies + 20);
    let attackDamageTohero = Math.floor(Math.random() * enemyDamageToHero + 20);

    enemyHealth -= attackDamageToEnemy;
    heroHealth  -= attackDamageTohero;
    console.log(chalk.greenBright(`\nHero attacked ${enemy} for ${attackDamageToEnemy}`) , chalk.yellowBright(`${enemy} health :- ${enemyHealth}`));
    console.log(chalk.blueBright(`${enemy} attacked Hero for ${attackDamageTohero}`),  chalk.yellowBright(`Hero health :- ${heroHealth}`));
    
    
}



else if(message1 ===  "Take Health Portion"){
    if(numberOfHealthPortion > 0){
        heroHealth += healthporHealAmount;
        numberOfHealthPortion--;

        console.log(chalk.overline(`\nHero used health portion!, Hero health :- ${heroHealth}`,chalk.redBright (`Portions left :- ${numberOfHealthPortion}`)));
    }
    else{
        console.log(chalk.red.bold("\nYou have no portions left, defeat enemy to get one!"));
    }

}



else if( message1 === "Run"){
    console.log(chalk.red("\nYou ran away from enemy!"));
    continue Game;
}
}



if(heroHealth < 1){
    console.log(chalk.red.italic("\tALERT :- Hero's health is very low, cannot fight more!\t"));
    break;
}
console.log(chalk.greenBright(`\n\t${enemy} was defeated!\t`));
console.log(chalk.blueBright(`\tyou have ${heroHealth} health\t`));

let randomNumber = Math.floor(Math.random() * 100 + 1);
if(randomNumber < healthporHealAmount){
    numberOfHealthPortion++;
    console.log(chalk.yellowBright(`\nEnemy gave Hero health portion, Portions left :- ${numberOfHealthPortion}`));
}



let message2 = await select({
    message :"What do you want to do next ?",
    choices: [{value:"Continue"},{value :"Exit"}]
})
if(message2 === "Continue"){
    console.log("You are continuing game...")
}
else{
    console.log(chalk.italic("\nGame exited!"));
    console.log("-".repeat(70));
console.log(chalk.underline("\t\n THANK YOU FOR PLAYING! ^^ Ashna Ghazanfar Ali..\t"));
    break;
}

}

