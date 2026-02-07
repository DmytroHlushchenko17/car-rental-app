"use client";
import { useState } from "react";
import css from "./Form.module.css";
import Demo from "../Calendar/Calendar";
import { removeSpaces } from "@/types/cars";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleNoSpaceChange = (
    setter: (val: string) => void,
    value: string
  ) => {
    setter(removeSpaces(value));
  };

  return (
    <form className={css.Form}>
      <h3 className={css.blockFormTitel}>Book your car now</h3>
      <p className={css.blockFormText}>
        Stay connected! We are always ready to help you.
      </p>
      <label className={css.blockFormLabel}>
        <input
          className={css.blockFormInput}
          type="text"
          name="text"
          placeholder="Name*"
          onFocus={(e) => (e.target.placeholder = "Name")}
          onBlur={(e) => (e.target.placeholder = "Name*")}
          required
          value={name}
          onChange={(e) => handleNoSpaceChange(setName, e.target.value)}
        />
      </label>
      <label className={css.blockFormLabel}>
        <input
          className={css.blockFormInput}
          type="email"
          name="email"
          placeholder="Email*"
          onFocus={(e) => (e.target.placeholder = "Email")}
          onBlur={(e) => (e.target.placeholder = "Email*")}
          required
          value={email}
          onChange={(e) => handleNoSpaceChange(setEmail, e.target.value)}
        />
      </label>
      <label className={css.blockFormLabel}>
        <Demo />
      </label>
      <label className={css.blockFormLabel}>
        <textarea
          className={css.blockFormInputTextarea}
          name="textarea"
          placeholder="Comment"
          value={comment}
          onChange={(e) => handleNoSpaceChange(setComment, e.target.value)}
        />
      </label>
      <button type="submit" className={css.blockFormBtn}>
        Send
      </button>
    </form>
  );
}
