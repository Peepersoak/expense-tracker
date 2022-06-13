import React, { useState } from "react";
import Card from "../General/Card";
import ExpenseHeader from "./ExpenseHeader";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./Form/ExpenseForm";

import "./ExpenseMain.css";

const ExpenseMain = () => {
  const [getExpense, addExpense] = useState([]);
  const [getFilterOption, setFilterOption] = useState("Date");
  const [getShowForm, setShowForm] = useState(false);
  const [getCurrency, setCurrency] = useState("PHP");

  const addExpenseHandler = (expenseData) => {
    addExpense((prevData) => {
      return [expenseData, ...prevData];
    });
  };

  const changeFilterOption = (option) => {
    setFilterOption(option);
  };

  const filterredItem = getExpense
    .filter((expense) => {
      return new Date().getMonth() === expense.date.getMonth();
    })
    .map((expense) => {
      const newData = { ...expense };
      newData.amount /= 50;
      return getCurrency === "PHP" ? expense : newData;
    })
    .sort((a, b) => {
      if (getFilterOption === "Date") {
        return new Date(b.date) - new Date(a.date);
      } else {
        return b.amount - a.amount;
      }
    });

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  const maxExpense = filterredItem
    .map((expense) => {
      return parseInt(expense.amount);
    })
    .reduce((a, b) => a + b, 0);

  const changeCurrencyHandler = (currency) => {
    setCurrency(currency);
  };

  const removeItem = (itemID) => {
    addExpense((prev) => {
      return prev.filter((expense) => {
        return expense.id !== itemID;
      });
    });
  };

  return (
    <Card className="expense-wrapper">
      {getShowForm && (
        <ExpenseForm
          onHideForm={hideFormHandler}
          onAddExpense={addExpenseHandler}
          currency={getCurrency}
        />
      )}
      <ExpenseHeader
        onShowForm={showFormHandler}
        maxExpense={maxExpense}
        currency={getCurrency}
      />
      <ExpenseFilter
        value={getFilterOption}
        onChangeFilterOption={changeFilterOption}
        onChangeCurrency={changeCurrencyHandler}
        currentCurrency={getCurrency}
      />
      <ExpenseItem
        items={filterredItem}
        currency={getCurrency}
        onRemove={removeItem}
      />
    </Card>
  );
};

export default ExpenseMain;
