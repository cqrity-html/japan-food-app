import { useRef } from "react";
import "./Input.css";

const Input = (props) => {
  const inputEl = useRef(props.input);

  const increaseItemNumber = () => {
    props.addItemNumber(inputEl.current.value);
  };

  return (
    <div className="input">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={inputEl}
        {...props.input}
        onChange={increaseItemNumber}
      ></input>
    </div>
  );
};

export default Input;
