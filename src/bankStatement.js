class BankStatement {
  constructor(account) {
    this.account = account;
    this.sheet = "date || credit || debit || balance";
  }

  printStatement() {
    this.formatTransaction();
    return this.sheet;
  }

  formatTransaction() {
    const allTransactions = this.account.transactions;
    if (allTransactions) {
      for (let i = 0; i <= allTransactions.length - 1; i++) {
        const eachTransaction = allTransactions[i];
        if ((eachTransaction.type = "credit")) {
          const sheetFormat = `\n${eachTransaction.date.toLocaleDateString(
            "en-GB"
          )} || ${eachTransaction.amount.toFixed(2)} || || ${
            eachTransaction.currentBalance.toFixed(2)
          }`;
          this.sheet += sheetFormat;
        } else {
          const sheetFormat = `\n${eachTransaction.date.toLocaleDateString(
            "en-GB"
          )} || || ${eachTransaction.amount.toFixed(2)} || ${
            eachTransaction.currentBalance.toFixed(2)
          }`;
          this.sheet += sheetFormat;
        }
      }
    }
  }
}

module.exports = BankStatement;