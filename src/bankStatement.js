class BankStatement {
  constructor(account) {
    this.account = account;
    this.sheet = "date || credit || debit || balance";
  }

  printStatement() {
    this.formatTransaction();
    console.log(this.sheet)
  }

  formatTransaction() {
    const allTransactions = this.account.transactions.reverse();
      for (let i = 0; i <= allTransactions.length - 1; i++) {
        const eachTransaction = allTransactions[i];
        const sheetFormat = '\n' + eachTransaction.date.toLocaleDateString('en-GB') +
            ' || ' + (eachTransaction.type === 'credit' ? eachTransaction.amount.toFixed(2) : ' ') +
            ' || ' + (eachTransaction.type !== 'credit' ? eachTransaction.amount.toFixed(2) : ' ') +
            ' || ' + eachTransaction.currentBalance.toFixed(2);
        this.sheet += sheetFormat;
      }
  }
}

module.exports = BankStatement;