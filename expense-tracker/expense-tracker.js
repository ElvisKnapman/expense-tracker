const account = {
    name: 'Elvis Knapman',
    income: [],
    expenses: [],
    addIncome: function(description, amount) {
        const income = {
            description: description,
            amount: amount
        }
        this.income.push(income);
    },
    addExpense: function(description, amount) {
        const expense = {
            description: description,
            amount: amount
        }
        this.expenses.push(expense);
    },
    getAccountSummary: function() {
        let totalIncome = 0;
        let totalExpenses = 0;
        let accountBalance = 0;

        this.income.forEach(function(incomeItem) {
            totalIncome += incomeItem.amount;
        });

        this.expenses.forEach(function(expenseItem) {
            totalExpenses += expenseItem.amount;
        });

        accountBalance = totalIncome - totalExpenses;

        return `${this.name} has a accountBalance of $${accountBalance}. $${totalIncome} in income and $${totalExpenses} in expenses.`;
    }
}

account.addIncome('Work', 2500);
account.addExpense('Rent', 950);
account.addExpense('Gas', 50);

console.log(account.getAccountSummary());


