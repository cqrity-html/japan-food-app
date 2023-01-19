import "./CartItem.css";
import { useState, useCallback } from "react";

const CartItem = ({ price, fullPrice, setFullPrice, name, amount, dispatchCartItems, setCartItemsCount, cartItems, id }) => {
  const [currentItemCount, setCurrentItemCount] = useState(amount);

  const onRemove = useCallback(() => {
    if (fullPrice < 1) return;
    setFullPrice(prev => prev - price);
    setCurrentItemCount((prev) => prev - 1);
    setCartItemsCount((prev) => prev - 1);
    if (currentItemCount < 2) {
      const reducedCartItems = cartItems.filter(item => item.id !== id)
      dispatchCartItems({ type: "ADD_ITEMS", items: reducedCartItems })
    }
  }, [price, fullPrice, setFullPrice, currentItemCount, dispatchCartItems, setCartItemsCount, cartItems]);

  const onAdd = useCallback(() => {
    setFullPrice(prev => prev + price);
    setCurrentItemCount((prev) => prev + 1);
    setCartItemsCount((prev) => prev + 1);
  }, [price, fullPrice, setFullPrice, currentItemCount, dispatchCartItems, setCartItemsCount, cartItems]);

  return (
    <li className="cart-item">
      <div>
        <h2>{name}</h2>
        <div className="summary">
          <span className="price">${price}</span>
          <span className="amount">{`x ${currentItemCount}`}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
