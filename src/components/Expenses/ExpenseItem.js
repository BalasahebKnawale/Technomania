import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import "./Expenses.css";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  // const [newTitle, setNewTitle] = useState("");
  // const clickHandler = () => {
  //   setTitle(newTitle);

  //   console.log(title);
  // };

  // const onChangeHandler = (event) => {
  //   setNewTitle(event.target.value);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <input value={newTitle} onChange={onChangeHandler}></input>
      <button onClick={clickHandler}>change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
