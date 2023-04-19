class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(depositAmount) {
    this.balance += depositAmount;
    this.addTransaction(depositAmount, "credit")
  }

  withdrawal(withdrawalAmount) {
    if (this.balance - withdrawalAmount >= 0) {
      this.balance -= withdrawalAmount;
      this.addTransaction(withdrawalAmount, "debit");
    } else { 
      throw new Error("Insufficient funds");
    }
  }

  addTransaction(amount, type) {
    const transaction = {
      date: new Date(),
      amount: amount,
      type: type,
    };
    this.transactions.push(transaction);
  }
}

module.exports = BankAccount;
