// Modules externos
const inquirer = require("inquirer");
const chalk = require("chalk");

// Modules internos
const fs = require("fs");

console.log("teste");

const operation = () => {
  inquirer
    .createPromptModule([
      {
        type: "list",
        name: "action",
        message: "O que você deseja fazer?",
        choices: [
          "Criar Conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then()
    .catch((err) => console.log(err));
};
