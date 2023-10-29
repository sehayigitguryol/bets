import { Bet } from "../types";
import BetGroupItem from "./BetGroupItem";
import Comments from "./Comments";
import MatchDetail from "./MatchDetail";

type Props = {
  bet: Bet;
};

function BetItem(props: Props) {
  const { bet } = props;

  return (
    <div className="border border-solid p-2 rounded-xl bg-slate-100 flex">
      <MatchDetail bet={bet} />
      <Comments />
      {Object.keys(bet.OCG).map((betGroupId) => {
        return <BetGroupItem key={betGroupId} betGroup={bet.OCG[betGroupId]} />;
      })}
    </div>
  );
}

export default BetItem;
