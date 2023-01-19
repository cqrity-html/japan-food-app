import React, { useReducer, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContext from "./store/CartContext";
import { cartReducer } from "./store/CartReducer";

function App() {
  const [cartState, dispatchCartItems] = useReducer(cartReducer, {
    items: [],
    isModalShown: "none",
    currentItemCount: 1
  });

  const [cartReaction, setCartReaction] = useState("");
  const [cartItemsCount, setCartItemsCount] = useState(cartState.items.length);
  const [fullPrice, setFullPrice] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);

  const cartButtonClasses = "button" + " " + cartReaction;

  const showModal = () => {
    dispatchCartItems({ type: "SHOW_CART", status: "block" });
  };

  const closeModal = () => {
    dispatchCartItems({ type: "CLOSE_CART", status: "none" });
  };

  const onAddItem = (evt, addedMeal) => {
    evt.preventDefault();
    cartState.items.push(addedMeal);
    dispatchCartItems({ type: "ADD_ITEMS", items: cartState.items });
    setCartItemsCount(cartItemsCount + addedMeal.amount);
    setFullPrice(+(fullPrice + addedMeal.price * addedMeal.amount));
    setItemAmount(addedMeal.amount);
    setCartReaction("bump");
    setTimeout(() => {
      setCartReaction("");
    }, 500);
  };

  return (
    <CartContext.Provider
      value={{
        onModalClose: closeModal,
        onCartClick: showModal,
        isModalShown: cartState.isModalShown,
        onAddItem: onAddItem,
      }}
    >
      <Cart
        fullPrice={fullPrice}
        setFullPrice={setFullPrice}
        dispatchCartItems={dispatchCartItems}
        cartState={cartState}
        itemAmount={itemAmount}
        setCartItemsCount={setCartItemsCount}
      />
      <Header
        cartItemsCount={cartItemsCount}
        items={cartState.items}
        cartButtonClasses={cartButtonClasses}
      />
      <main>
        <Meals />
      </main>
    </CartContext.Provider>
  );
}

export default App;
