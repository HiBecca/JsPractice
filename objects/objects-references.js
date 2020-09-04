//  i can NOT get this to work  (╬▔皿▔)╯

// expense tracker exercise, using objects and functions.
//  add 4 functions: adding income, adding expenses, resetting account, get summary  (and then use them lol)

// create myAccount object
let myAccount = {
  name: "Becca DeVere",
  expenses: 0,
  income: 0
};

// ADD EXPENSE FUNCTION -- - -- - -- - -- - --
let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
};


// Add 3 new fuctions.

// ADD INCOME FUNCTION -- - -- - -- - -- - -- -
let addIncome = function (account, income) {
  account.income = account.income + income;
};

// ACCOUNT RESET FUNCTION -- - -- - -- - -- - --
// resetAccount - reset account and expenses to 0
let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

// GET SUMMARY FUNCTION - -- - -- - -- - -- - -- -
// getAccountSummary - summary of acct: acct balance, expenses and income
let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance} balance. $${account.income} in income. $${account.expenses} in expenses.`;
};

let getSummary = getAccountSummary(myAccount);

//  run program in this order: -- - -- - -- - -- -

console.log(myAccount);

// add some income
addIncome(myAccount, 400);
addIncome(myAccount, 600);
// add expense
addExpense(myAccount, 0);
// add expense
addExpense(myAccount, 20);
// getAcct summary
console.log(getSummary);
// reset account
resetAccount(myAccount);
// get account summary
console.log(getSummary);
// end program
