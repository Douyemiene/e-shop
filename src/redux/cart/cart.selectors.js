import { createSelector } from "reselect";
//takes state and returns a part of ot
const selectCart = state => state.cart;
//selectCartItems is a memior selector bcus it was created with createSelector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
