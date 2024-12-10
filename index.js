const accountData = require('./data.json');
const accounts = accountData.data


const revenue = accounts
  .filter(account => account.account_category === "revenue")
  .reduce((sum, account) => sum + account.total_value, 0);




const formatter = new Intl.NumberFormat('en-US');

  
console.log(`Revenue: $${formatter.format(revenue.toFixed(0))}`);