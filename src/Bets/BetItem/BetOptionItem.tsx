import clsx from "clsx";
import { useCartContext } from "../../context";
import { Bet, BetOption } from "../types";

type Props = {
  optionName: string;
  bet: Bet;
  betOption: BetOption | undefined;
};

function BetOptionItem(props: Props) {
  const { optionName, betOption, bet } = props;

  const { dispatch, getIsBetOptionSelected } = useCartContext();

  const isSelected = getIsBetOptionSelected(bet, betOption?.ID);

  const handleOptionClick = () => {
    if (isSelected) {
      dispatch({
        type: "REMOVE_FROM_CART",
        betId: bet.NID,
        betOptionId: betOption.ID,
      });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        bet,
        betOption,
      });
    }
  };

  return (
    <div className="grid gap-2 w-10 justify-center">
      <h4 className="justify-self-center">{optionName}</h4>
      {betOption ? (
        <button
          onClick={handleOptionClick}
          className={clsx({
            "bg-yellow-300": isSelected,
            "bg-slate-200": !isSelected,
            "rounded-md p-1": true,
          })}
        >
          {betOption.O}
        </button>
      ) : (
        <h4>-</h4>
      )}
    </div>
  );
}

export default BetOptionItem;
