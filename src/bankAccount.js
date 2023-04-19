class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(depositAmount) {
    const currentBalance = this.balance += depositAmount;
    this.addTransaction(depositAmount, "credit", currentBalance)
  }

  withdrawal(withdrawalAmount) {
    if (this.balance - withdrawalAmount >= 0) {
      const currentBalance = this.balance -= withdrawalAmount;
      this.addTransaction(withdrawalAmount, "debit", currentBalance);
    } else { 
      throw new Error("Insufficient funds");
    }
  }

  addTransaction(amount, type, currentBalance) {
    const transaction = {
      date: new Date(),
      amount: amount,
      type: type,
      currentBalance: currentBalance
    };
    this.transactions.push(transaction);
  }
}

module.exports = BankAccount;
