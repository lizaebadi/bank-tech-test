class BankStatement {
  constructor(account) {
    this.account = account;
  }

  printStatement() {
    return "date || credit || debit || balance"
  }
}

module.exports = BankStatement;