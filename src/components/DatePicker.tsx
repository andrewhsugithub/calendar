import React, { FC } from "react";
import Calendar from "./Calendar";

const DatePicker: FC<{}> = ({}) => {
  return (
    <div className="date-picker-container">
      <div className="background-container"></div>
      <Calendar />
    </div>
  );
};

export default DatePicker;
