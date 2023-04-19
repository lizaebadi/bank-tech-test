class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(depositAmount) {
    this.balance += depositAmount;
    const transaction = {
      date: new Date(),
      amount: depositAmount,
      type: "credit",
    };
    this.transactions.push(transaction);
  }

  withdrawal(withdrawalAmount) {
    this.balance -= withdrawalAmount;
  }
}

module.exports = BankAccount;
