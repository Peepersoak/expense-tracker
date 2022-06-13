import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const changeFilterOption = (event) => {
    props.onChangeFilterOption(event.target.value);
  };
  const changeCurrencyHandler = (event) => {
    props.onChangeCurrency(event.target.value);
  };

  return (
    <div className="expense-filter-wrapper">
      <h2 className="expense-filter-label">
        Expenses{" "}
        <span>
          <select
            onChange={changeCurrencyHandler}
            value={props.currentCurrency}
            className="currency-option"
          >
            <option>USD</option>
            <option>PHP</option>
          </select>
        </span>
      </h2>
      <div>
        <label className="expense-filter-filter-label">Filter: </label>
        <select
          value={props.value}
          onChange={changeFilterOption}
          className="expense-filter-filter"
        >
          <option value="Date">Date</option>
          <option value="Amount">Amount</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
