const BankAccount = require("../src/bankAccount");
const MockDate = require('mockdate');

describe("BankAccount", () => {

  beforeEach(() => {
    MockDate.set('2023-04-17T00:00:00.000Z');
  });

  afterEach(() => {
    MockDate.reset(); 
  });

  it("Updates balance from £0 when £1,000 is deposited", () => {
    const bankAccount = new BankAccount();

    bankAccount.deposit(1000);
    expect(bankAccount.balance).toBe(1000);
  });

  it("Updates transaction with deposit date", () => {
    const bankAccount = new BankAccount();

    bankAccount.deposit(1000);
    expect(bankAccount.transactions[0].date.getFullYear()).toBe(2023);
    expect(bankAccount.transactions[0].date.getMonth()).toBe(3); // Date object will begin at 0 for the months. Therefore, 3 represents April.
    expect(bankAccount.transactions[0].date.getDate()).toBe(17);

  });

  it("Updates the balance from £1,000 when £500 is withdrawn", () => {
    const bankAccount = new BankAccount();

    bankAccount.deposit(1000);
    bankAccount.withdrawal(500);
    expect(bankAccount.balance).toBe(500);
  })

  it("Checks the transaction for withdrawals are updated", () => {
    const bankAccount = new BankAccount();

    bankAccount.deposit(1000);
    bankAccount.withdrawal(500);
    expect(bankAccount.transactions[1].type).toEqual("debit");
    expect(bankAccount.transactions[1].amount).toBe(500);
  })

});
