import React, { useState } from "react";
import Card from "../../General/Card";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [getTitle, setTitle] = useState("");
  const [getDate, setDate] = useState("");
  const [getAmount, setAmount] = useState("");

  const updateTitle = (event) => {
    setTitle(event.target.value);
  };

  const updateDate = (event) => {
    setDate(event.target.value);
  };

  const updateAmount = (event) => {
    setAmount(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const data = {
      title: getTitle,
      date: new Date(getDate),
      amount: props.currency === "USD" ? getAmount * 50 : getAmount,
      id: Date.now(),
    };

    props.onAddExpense(data);

    setTitle("");
    setDate("");
    setAmount("");
    props.onHideForm();
  };

  const hideFormHandler = () => {
    props.onHideForm();
  };

  return (
    <Card className="form-card">
      <form className="form-wrapper" onSubmit={submitFormHandler}>
        <div className="form-title">
          <label>Title</label>
          <input type="text" value={getTitle} onChange={updateTitle} required />
        </div>
        <div className="form-date-amount-wrapper">
          <div>
            <label>Date</label>
            <input type="date" value={getDate} onChange={updateDate} required />
          </div>
          <div>
            <label>Amount in {props.currency}</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={getAmount}
              onChange={updateAmount}
              required
            />
          </div>
        </div>
        <div className="form-btn-wrapper">
          <button type="button" onClick={hideFormHandler}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </Card>
  );
};

export default ExpenseForm;
