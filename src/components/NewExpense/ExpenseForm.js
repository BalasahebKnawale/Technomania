import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredAmmount, setEnteredAmmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("Enter the Title");
  const titleChangeHandler = (events) => {
    setEnteredTitle(events.target.value);
    console.log(enteredTitle);
  };
  const ammountChangeHandler = (events) => {
    setEnteredAmmount(events.target.value);
    console.log(enteredAmmount);
  };
  const dateHandler = (events) => {
    setEnteredDate(events.target.value);
    console.log(enteredDate);
  };
  const submitFormHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      ammount: enteredAmmount,
      date: new Date(enteredDate),
    };
    props.onFormSubmit(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmmount("");
    // console.log(expenseData);
  };
  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Ammount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmmount}
            onChange={ammountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelForm}>
          Cancel{" "}
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
