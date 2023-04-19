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
    if (this.balance - withdrawalAmount >= 0) {
      this.balance -= withdrawalAmount;
      const transaction = {
        date: new Date(),
        amount: withdrawalAmount,
        type: "debit",
      };
      this.transactions.push(transaction);
    } else { 
      throw new Error("Insufficient funds");
    }
  }
}

module.exports = BankAccount;
