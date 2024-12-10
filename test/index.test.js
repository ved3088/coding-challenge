const testData = require('./test.json');

const formatter = new Intl.NumberFormat('en-US');

describe("Financial calculations: ", () => {


  describe("Revenue calculated: ", () => {
    it("should calculate total Revenue ", () => {
      const rev = testData
        .filter(account => account.account_category === "revenue")
        .reduce((sum, account) => sum + account.total_value, 0);
      const revenue = formatter.format(rev)
      expect(revenue).toBe('50,000')
    });
  });

  describe("Expenses calculated: ", () => {
    it("should calculate total Expenses ", () => {
      const exp = testData
        .filter(account => account.account_category === "expense")
        .reduce((sum, account) => sum + account.total_value, 0);
      const expenses = formatter.format(exp)
      expect(expenses).toBe('20,000')
    });
  });

  describe("Gross Profit Margin: ", () => {
    it("should calculate Gross Profit Margin ", () => {
      const rev = testData
        .filter(account => account.account_category === "revenue")
        .reduce((sum, account) => sum + account.total_value, 0);
      const salesDebit = testData
        .filter(account => account.account_type === "sales" && account.value_type === "debit")
        .reduce((sum, account) => sum + account.total_value, 0);
      const grossProfitMargin = rev ? (salesDebit / rev) * 100 : 0;
      expect(grossProfitMargin).toBeCloseTo(30);
    });
  });

  describe("Net Profit Margin: ", () => {
    it("should calculate Net Profit Margin", () => {
      it.todo("calculate Net Profit Margin")
    });
  });
});

