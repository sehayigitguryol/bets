import { Bet } from "../types";
import BetGroupItem from "./BetGroupItem";
import Comments from "./Comments";
import MatchDetail from "./MatchDetail";
import MinBetCount from "./MinBetCount";

type Props = {
  bet: Bet;
};

function BetItem(props: Props) {
  const { bet } = props;

  return (
    <div className="border border-solid p-2 rounded-xl bg-slate-100 flex gap-3">
      <MatchDetail bet={bet} />
      <Comments />
      <MinBetCount bet={bet} />
      {/* For the sake of simplicity, only bet groups received from the API are shown, instead of displaying empty bet groups. */}
      {Object.keys(bet.OCG).map((betGroupId) => {
        return (
          <BetGroupItem
            betId={bet.NID}
            key={betGroupId}
            betGroup={bet.OCG[betGroupId]}
          />
        );
      })}
    </div>
  );
}

export default BetItem;
