const BankAccount = require("./src/bankAccount");
const BankStatement = require('./src/bankStatement');

const bankAccount = new BankAccount();
const bankStatement = new BankStatement(bankAccount);
