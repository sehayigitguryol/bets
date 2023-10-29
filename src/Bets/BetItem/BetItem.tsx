import { Bet, betOptionNames } from "../types";
import BetOptionItem from "./BetOptionItem";
import Comments from "./Comments";
import MatchDetail from "./MatchDetail";
import MinBetCount from "./MinBetCount";

type Props = {
  bet: Bet;
};

function BetItem(props: Props) {
  const { bet } = props;

  return (
    <div className="border border-solid p-2 rounded-xl bg-slate-100 flex gap-2">
      <MatchDetail bet={bet} />
      <Comments />
      <MinBetCount bet={bet} />
      {betOptionNames.map((optionName) => {
        const betOption =
          bet.betOptions.find((option) => option.N === optionName) ?? undefined;
        console.log({ bet, betOption, optionName });
        return (
          <BetOptionItem
            key={optionName}
            bet={bet}
            betOption={betOption}
            optionName={optionName}
          />
        );
      })}
    </div>
  );
}

export default BetItem;
