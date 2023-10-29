import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";

import { CartState, CartAction } from "./types";
import { cartReducer } from "./cartReducer";
import { Bet } from "../Bets/types";

const CartContext = createContext<{
  calculateTotal: () => number;
  dispatch: Dispatch<CartAction>;
  getIsBetOptionSelected: (bet: Bet, betOptionId: string) => boolean;
  state: CartState;
}>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

export function CartProvider({ children }: PropsWithChildren<any>) {
  const [state, dispatch] = useReducer(cartReducer, []);

  const getIsBetOptionSelected = (bet: Bet, betOptionId: string) =>
    state.some(
      (item) => item.bet.NID === bet.NID && item.betOption.ID === betOptionId
    );

  const calculateTotal = (): number =>
    state.length > 0
      ? state.reduce((total, item) => total * parseFloat(item.betOption.O), 1)
      : 0;

  return (
    <CartContext.Provider
      value={{ calculateTotal, dispatch, getIsBetOptionSelected, state }}
    >
      {children}
    </CartContext.Provider>
  );
}
