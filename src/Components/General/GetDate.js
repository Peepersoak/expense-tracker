import React from "react";

const Date = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className={props.className}>
      {month} {day}, {year}
    </div>
  );
};

export default Date;
