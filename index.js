const accountData = require('./data.json');
const accounts = accountData.data

// calculate revenue
const revenue = accounts
  .filter(account => account.account_category === "revenue")
  .reduce((sum, account) => sum + account.total_value, 0);

// calculate expenses
const expenses = accounts
  .filter(account => account.account_category === "expense")
  .reduce((sum, account) => sum + account.total_value, 0);

// calculate gross profit margin, 0% gross profit margin as there are no values where account_type = 'sales' and value_type = 'debit'
const grossProfitMargin = (() => {
  const salesDebit = accounts
    .filter(account => account.account_type === "sales" && account.value_type === "debit")
    .reduce((sum, account) => sum + account.total_value, 0);
  return (salesDebit / revenue) * 100 || 0;
})();

// calculate net profit margin
const netProfitMargin = ((revenue - expenses) / revenue) * 100 || 0;

// calculate working capital ratio
const workingCapitalRatio = (() => {
  const assets = accounts
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

  const liabilities = accounts
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

  return (assets / liabilities) * 100 || 0;
})();

// formatter to format values to add comma as required
const formatter = new Intl.NumberFormat('en-US');


console.log(`Revenue: $${formatter.format(revenue.toFixed(0))}`);
console.log(`Expenses: $${formatter.format(expenses.toFixed(0))}`);
console.log(`Gross Profit Margin: ${grossProfitMargin.toFixed(1)}%`);
console.log(`Net Profit Margin: ${netProfitMargin.toFixed(1)}%`);
console.log(`Working Capital Ratio: ${workingCapitalRatio.toFixed(1)}%`);