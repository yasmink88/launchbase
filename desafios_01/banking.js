const user = {
  name: "Yasmin",
  transactions: [],
  balance: 0,
};

function createTransaction(type, value) {
  if (type == "credit") {
    user.balance += value;
  } else {
    user.balance -= value;
  }

  user.transactions.push({ type: type, value: value });
  console.log(`Your balance now is: ${user.balance}`);
}

function getHigherTransactionByType(type) {
  let valuesByType = [];

  for (let i = 0; i < user.transactions.length; i++) {
    if (user.transactions[i].type == type) {
      valuesByType.push(user.transactions[i].value);
    }
  }

  for (let transaction of user.transactions) {
    if (transaction.value == Math.max(...valuesByType)) {
      console.log(transaction);
    }
  }
}

function getAverageTransactionValue() {
  let total = 0;
  for (let transaction of user.transactions) {
    total += transaction.value;
  }
  console.log(total / user.transactions.length);
}

function getTransactionsCount() {
  let credit = [];
  let debit = [];
  let totalCount = {};

  for (let transaction of user.transactions) {
    if (transaction.type == "credit") {
      credit.push(transaction);
    } else {
      debit.push(transaction);
    }
  }
  totalCount = {
    credit: credit.length,
    debit: debit.length,
  };

  console.log(totalCount);
}

createTransaction("debit", 30);
createTransaction("credit", 200);
createTransaction("debit", 60);
createTransaction("credit", 40);

getHigherTransactionByType("debit");
getAverageTransactionValue();
getTransactionsCount();

//done in 1 hour and 20 minutes
