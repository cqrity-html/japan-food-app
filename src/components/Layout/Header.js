import HeaderCartButton from "./HeaderCartButton";
import "./Header.css";
import React, { useContext } from 'react';
import CartContext from "../../store/CartContext";

const Header = (props) => {
  const ctx = useContext(CartContext);

  return (
    <React.Fragment>
      <header>
        <div className="header">
          <h1>Япона Кухня</h1>
          <HeaderCartButton
            onClickCart={ctx.onCartClick}
            itemsCount={props.cartItemsCount}
            items={props.items}
            cartButtonClasses={props.cartButtonClasses} />
        </div>
      </header>
      <div className="main-image">
        <img src={"../../assets/sushi.jpg"} alt="Блюда японской кухни"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
