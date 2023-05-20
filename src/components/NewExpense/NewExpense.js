import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isEditable, setIsEditable] = useState(false);
  const onDataSubmit = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.addNewExpense(expenseData);
    setIsEditable(false);
  };
  const addNewExpenseHandler = () => {
    setIsEditable(true);
  };
  const cancelform = () => {
    setIsEditable(false);
  };
  return (
    <div className="new-expense">
      {!isEditable && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {isEditable && (
        <ExpenseForm
          onFormSubmit={onDataSubmit}
          onCancelForm={cancelform}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
