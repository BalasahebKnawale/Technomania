import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../Filter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [data, setData] = useState(0);
  const filteredData = (datas) => {
    setData(datas);
  };

  const filtereddata = props.item.filter((el) => {
    return el.date.getFullYear().toString() === data;
  });

  let expensesdata = <h2 className="noData">No Data Found</h2>;

  if (filtereddata.length > 0) {
    expensesdata = filtereddata.map((d) => (
      <ExpenseItem title={d.title} amount={d.price} date={d.date} key={d.id} />
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter onfilteredValue={filteredData}></ExpensesFilter>
      {expensesdata}
    </Card>
  );
};
export default Expenses;
