import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/Expenses.css";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";
import { useEffect, useState } from "react";
const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);
  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setExpenses(json);
      });
  }, []);

  expenses.forEach(
    (d) => (d.date = randomDate(new Date(2012, 0, 1), new Date()))
  );
  console.log(expenses);

  const onNewExpense = (expdata) => {
    const updatedExpenses = [expdata, ...expenses];
    setExpenses(updatedExpenses);
    console.log(expdata);
  };

  return (
    <div className="App">
      <NewExpense addNewExpense={onNewExpense} />

      <Expenses item={expenses} />
    </div>
  );
};

export default App;
