const testData = require('./test.json');

const formatter = new Intl.NumberFormat('en-US');

describe("Financial calculations: ", () => {
  describe("Revenue generated: ", () => {
    it("should calculate total revenue ", () => {
      const rev = testData
        .filter(account => account.account_category === "revenue")
        .reduce((sum, account) => sum + account.total_value, 0);
      const revenue = formatter.format(rev)
      expect(revenue).toBe('50,000')
    });
  })
})

