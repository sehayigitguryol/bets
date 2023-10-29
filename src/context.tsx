import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import { Bet, BetOption } from "./Bets/types";

type CartItem = {
  bet: Bet;
  betOption: BetOption;
};

type CartState = CartItem[];

type CartAction =
  | { type: "ADD_TO_CART"; bet: Bet; betOption: BetOption }
  | { type: "REMOVE_FROM_CART"; betId: string; betOptionId: string };

const CartContext = createContext<{
  state: CartState;
  dispatch: Dispatch<CartAction>;
  getIsBetOptionSelected: (bet: Bet, betOptionId: string) => boolean;
}>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
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
          bet: bet,
          betOption: betOption,
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

export const CartProvider = ({ children }: PropsWithChildren<any>) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  const getIsBetOptionSelected = (bet: Bet, betOptionId: string) => {
    return state.some(
      (item) => item.bet.NID === bet.NID && item.betOption.ID === betOptionId
    );
  };

  return (
    <CartContext.Provider value={{ state, dispatch, getIsBetOptionSelected }}>
      {children}
    </CartContext.Provider>
  );
};
