const BankAccount = require("../src/bankAccount");

describe("BankAccount", () => {
  it("Updates balance from £0 when £1,000 is deposited", () => {
    const bankAccount = new BankAccount();

    bankAccount.deposit(1000);
    expect(bankAccount.balance).toBe(1000);
  });
});
