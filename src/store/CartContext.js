import React from "react";

const CartContext = React.createContext({
    onModalClose: () => { },
    onCartClick: () => { },
    isModalShown: 'none',
    onAddItem: () => { },
});

export default CartContext;
