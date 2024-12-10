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
      const revenue = testData
        .filter(account => account.account_category === 'revenue')
        .reduce((sum, account) => sum + account.total_value, 0);
      const expenses = testData
        .filter(account => account.account_category === 'expense')
        .reduce((sum, account) => sum + account.total_value, 0);
      const netProfitMargin = revenue ? ((revenue - expenses) / revenue) * 100 : 0;
      expect(netProfitMargin).toBeCloseTo(60);
    });
  });

  describe("Working Capital Ratio: ", () =>{
    it("should calculate Working Capital Ratio", () => {
      const assets = testData
      .filter(
        account =>
          account.account_category === 'assets' &&
          ['current', 'bank', 'current_accounts_receivable'].includes(account.account_type)
      )
      .reduce((sum, account) => {
        return account.value_type === 'debit'
          ? sum + account.total_value
          : sum - account.total_value;
      }, 0);

    const liabilities = testData
      .filter(
        account =>
          account.account_category === 'liability' &&
          ['current', 'current_accounts_payable'].includes(account.account_type)
      )
      .reduce((sum, account) => {
        return account.value_type === 'credit'
          ? sum + account.total_value
          : sum - account.total_value;
      }, 0);
    const workingCapitalRatio = (assets / liabilities) * 100 || 0;
    expect(workingCapitalRatio).toBe(200)
    });
  });
});

