import GetDate from "../General/GetDate";
import React from "react";

import "./ExpenseHeader.css";

const ExpenseHeader = (props) => {
  const currentDate = new Date();
  const totalMonthlyExpense = props.maxExpense;

  const showFormHandler = () => {
    props.onShowForm();
  };

  return (
    <div className="header-wrapper">
      <div>
        <GetDate date={currentDate} className="main-wrapper-date" />
        <h2 className="total-monthly-expense__label">
          <span>Monthly Expense: </span>
          {props.currency === "PHP" ? "₱" : "$"}
          {totalMonthlyExpense}
        </h2>
      </div>
      <div>
        <button className="add-expense-btn" onClick={showFormHandler}>
          +
        </button>
      </div>
    </div>
  );
};

export default ExpenseHeader;
