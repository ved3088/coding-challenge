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

const formatter = new Intl.NumberFormat('en-US');


console.log(`Revenue: $${formatter.format(revenue.toFixed(0))}`);
console.log(`Expenses: $${formatter.format(expenses.toFixed(0))}`);
console.log(`Gross Profit Margin: ${grossProfitMargin.toFixed(1)}%`);