const users = [
  {
    userName: "Marcio",
    income: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0],
  },
  {
    userName: "Salvio",
    income: [117.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9],
  },

  {
    userName: "Lucia",
    income: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9],
  },
];

function totalSum(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

function balanceCalc() {
  let income, expenses, total;

  for (let user of users) {
    income = totalSum(user.income);
    expenses = totalSum(user.expenses);
    total = income - expenses;

    if (total > 0) {
      console.log(
        `${user.userName} has a positive balance of ${total.toFixed(2)}`
      );
    } else {
      console.log(
        `${user.userName} has a negative balance of ${total.toFixed(2)}`
      );
    }
  }
}

balanceCalc();
