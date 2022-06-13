import React from "react";
import Item from "./Item";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <>
      {props.items.length > 0 ? (
        <ul className="ul-wrapper">
          {props.items.map((item) => {
            return (
              <li
                key={item.id}
                className="li-wrapper"
                onClick={() => {
                  props.onRemove(item.id);
                }}
              >
                <Item data={item} currency={props.currency} />
              </li>
            );
          })}
        </ul>
      ) : (
        <h3 className="noExpense">No Expenses</h3>
      )}
    </>
  );
};

export default ExpenseItem;
