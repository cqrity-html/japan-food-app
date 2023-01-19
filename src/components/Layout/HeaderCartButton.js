import CartIcon from "../Cart/CartIcon";
import { useState } from "react";
import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {

  const onClickCart = () => {
    props.onClickCart();
  };

  return (
    <button type="button" className={props.cartButtonClasses} onClick={onClickCart}>
      <span>
        <CartIcon className="icon" />
      </span>
      <span>Корзина</span>
      <span className="badge">{props.itemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
