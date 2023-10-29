import { CartAction, CartState } from "./types";

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { bet, betOption } = action;
      const existingBetWithDifferentOptionIndex = state.findIndex(
        (item) => item.bet.NID === bet.NID
      );

      if (existingBetWithDifferentOptionIndex !== -1) {
        state.splice(existingBetWithDifferentOptionIndex, 1);
      }

      return [
        ...state,
        {
          bet,
          betOption,
        },
      ];
    case "REMOVE_FROM_CART":
      return state.filter(
        (item) =>
          item.bet.NID !== action.betId ||
          item.betOption.ID !== action.betOptionId
      );
    default:
      return state;
  }
};
