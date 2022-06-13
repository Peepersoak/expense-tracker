import React from "react";
import Card from "../../General/Card";
import GetDate from "../../General/GetDate";

import "./Item.css";

const Item = (props) => {
  const title = props.data.title;
  const date = props.data.date;
  const amount = props.data.amount;

  return (
    <Card className="item-card">
      <div className="item-wrapper">
        <div>
          <h2>{title}</h2>
          <GetDate date={date} className="item-date" />
        </div>
        <h1 className="item-amount">
          {props.currency === "PHP" ? "₱" : "$"}
          {amount}
        </h1>
      </div>
    </Card>
  );
};

export default Item;
