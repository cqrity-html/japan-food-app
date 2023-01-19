import Modal from "../UI/Modal";
import "./Cart.css";
import CartItem from "./CartItem";
import React, { useContext } from "react";
import CartContext from "../../store/CartContext";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const newFullPrice = props.fullPrice.toFixed(2);
  const cartItems = props.cartState.items;

  return (
    <Modal isModalShown={props.modalStatus}>
      <ul className="cart-items">
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              amount={props.itemAmount}
              fullPrice={props.fullPrice}
              setFullPrice={props.setFullPrice}
              dispatchCartItems={props.dispatchCartItems}
              setCartItemsCount={props.setCartItemsCount}
              cartItems={props.cartState.items}
            />
          );
        })}
      </ul>
      <div className="total">
        <span>Итого</span>
        <span>${Math.abs(newFullPrice)}</span>
      </div>
      <div className="actions">
        <button
          type="button"
          className="button--alt"
          onClick={ctx.onModalClose}
        >
          Закрыть
        </button>
        <button type="submit" className="button">
          Заказать
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
