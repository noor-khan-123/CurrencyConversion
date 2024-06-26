#! /usr/bin/env node

import inquirer from "inquirer"

const currency: any = {
    USD: 1,//Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_answer = await inquirer.prompt(
  [ 
    {
      name: "from",
      message: "Enter from Currency",
      type: "list",
      choices: ["USD", "GBP", "EUR", "INR", "PKR"]
    },

    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "GBP", "EUR", "INR", "PKR"]
    },

    {
       name: "amount",
       message: "How much do you want to convert ?",
       type: "number"
    }
  ]  
);

//console.log(user_answer);

let fromAmount =  currency[user_answer.from]; //exchange rate

let toAmount = currency[user_answer.to]; //exchange rate

let amount = user_answer.amount;

let baseAmount = amount / fromAmount; //convert the input amount into base currency

let convertedAmount = baseAmount * toAmount; 

console.log(convertedAmount);
