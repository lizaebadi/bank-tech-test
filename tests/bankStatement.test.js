const BankAccount = require("../src/bankAccount");
const BankStatement = require("../src/bankStatement");
const MockDate = require('mockdate');



describe("BankStatement", () => {

  beforeEach(() => {
    MockDate.set("2023-04-17T00:00:00.000Z");
  });

  afterEach(() => {
    MockDate.reset();
  });

  it("returns correct headings for a statement with a transaction", () => {
    const bankAccount = new BankAccount;
    const bankStatement = new BankStatement(bankAccount);

    const consoleSpy = jest.spyOn(console, 'log');
    bankStatement.printStatement()

    expect(consoleSpy).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
  });

  it("returns 1 transaction to the statement", () => {
    const bankAccount = new BankAccount;
    bankAccount.deposit(500);
    const bankStatement = new BankStatement(bankAccount);

    const consoleSpy = jest.spyOn(console, 'log');
    bankStatement.printStatement()

    expect(consoleSpy).toHaveBeenCalledWith(
      "date || credit || debit || balance\n17/04/2023 || 500.00 ||   || 500.00"
    );
  });

  it("returns multiple transactions to the statement in correct order", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(1000);
    bankAccount.deposit(2000);
    bankAccount.withdrawal(500);
    const bankStatement = new BankStatement(bankAccount);

    const consoleSpy = jest.spyOn(console, 'log');
    bankStatement.printStatement()

    expect(consoleSpy).toHaveBeenCalledWith(
      "date || credit || debit || balance\n17/04/2023 ||   || 500.00 || 2500.00\n17/04/2023 || 2000.00 ||   || 3000.00\n17/04/2023 || 1000.00 ||   || 1000.00"
    );
  });
});
