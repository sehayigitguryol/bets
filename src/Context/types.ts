import { Bet, BetOption } from "../Bets/types";

export type CartItem = {
  bet: Bet;
  betOption: BetOption;
};
export type CartState = CartItem[];

export type CartAction =
  | { bet: Bet; betOption: BetOption; type: "ADD_TO_CART" }
  | { betId: string; betOptionId: string; type: "REMOVE_FROM_CART" };
