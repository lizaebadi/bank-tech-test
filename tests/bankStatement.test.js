const BankAccount = require("../src/bankAccount");
const BankStatement = require("../src/bankStatement");


describe("BankStatement", () => {
  it("returns correct headings for a statement", () => {
    account = "";
    const bankStatement = new BankStatement(account);
    expect(bankStatement.printStatement()).toEqual(
      "date || credit || debit || balance"
    );
  });
});
