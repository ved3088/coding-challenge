const testData = require('./test.json');

const formatter = new Intl.NumberFormat('en-US');

describe("Financial calculations: ", () => {


  describe("Revenue calculated: ", () => {
    it("should calculate total revenue ", () => {
      const rev = testData
        .filter(account => account.account_category === "revenue")
        .reduce((sum, account) => sum + account.total_value, 0);
      const revenue = formatter.format(rev)
      expect(revenue).toBe('50,000')
    });
  });

  describe("Expenses calculated: ", () => {
    it("should calculate total expenses ", () => {
      const exp = testData
        .filter(account => account.account_category === "expense")
        .reduce((sum, account) => sum + account.total_value, 0);
      const expenses = formatter.format(exp)
      expect(expenses).toBe('20,000')
    });
  });

  describe("Gross Profit Margin: ", () => {
    it("should calculate gross profit margin ", () => {
      it.todo("calculate gross profit margin")
    })
  })
})

