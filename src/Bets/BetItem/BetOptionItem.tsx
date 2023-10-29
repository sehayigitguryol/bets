import { useCartContext } from "../../Context/CartProvider";
import { Bet, BetOption } from "../types";
import clsx from "clsx";

type Props = {
  bet: Bet;
  betOption: BetOption;
  optionName: string;
};

function BetOptionItem(props: Props) {
  const { bet, betOption, optionName } = props;

  const { dispatch, getIsBetOptionSelected } = useCartContext();

  const isSelected = getIsBetOptionSelected(bet, betOption?.ID);

  const handleOptionClick = () => {
    if (isSelected) {
      dispatch({
        betId: bet.NID,
        betOptionId: betOption.ID,
        type: "REMOVE_FROM_CART",
      });
    } else {
      dispatch({
        bet,
        betOption,
        type: "ADD_TO_CART",
      });
    }
  };

  return (
    <div className="grid w-10 justify-center gap-2">
      <h4 className="justify-self-center">{optionName}</h4>
      {betOption ? (
        <button
          className={clsx({
            "bg-slate-200": !isSelected,
            "bg-yellow-300": isSelected,
            "rounded-md p-1": true,
          })}
          onClick={handleOptionClick}
          type="button"
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
