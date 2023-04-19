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

  it("returns correct headings for a statement", () => {
    account = "";
    const bankStatement = new BankStatement(account);
    expect(bankStatement.printStatement()).toEqual(
      "date || credit || debit || balance"
    );
  });

  it("returns 1 transaction to the statement", () => {
    const bankAccount = new BankAccount;
    bankAccount.deposit(500);
    const bankStatement = new BankStatement(bankAccount);

    expect(bankStatement.printStatement()).toEqual(
      "date || credit || debit || balance\n17/04/2023 || 500.00 || || 500.00"
    );
    
  });
});
