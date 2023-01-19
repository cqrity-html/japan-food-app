export const cartReducer = (prevState, action) => {
    if (action.type === "SHOW_CART" || action.type === "CLOSE_CART") {
        return {
            items: prevState.items,
            isModalShown: action.status,
        };
    }
    if (action.type === "ADD_ITEMS") {
        return {
            items: action.items,
            isModalShown: prevState.isModalShown,
            currentItemCount: prevState.currentItemCount,
        };
    }
    return {
        items: [],
        isModalShown: "none",
        currentItemCount: 1
    };
};
