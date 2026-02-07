"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./Calendar.module.css";

const CustomClassName = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date | null) => setStartDate(date)}
      className={css.blockFormInput}
      placeholderText="Booking date"
      calendarStartDay={1}
      minDate={new Date()}
    />
  );
};

export default CustomClassName;
