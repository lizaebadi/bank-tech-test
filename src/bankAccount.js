class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(depositAmount) {
    this.balance += depositAmount;
  }
}

module.exports = BankAccount;
