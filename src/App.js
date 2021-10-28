import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const expenses = [
  {
    id: "e1",
    title: "Car Insurance1",
    amount: 145.23,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e2",
    title: "Car Insurance2",
    amount: 245.23,
    date: new Date(2021, 4, 12),
  },
  {
    id: "e3",
    title: "Car Insurance3",
    amount: 345.23,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
