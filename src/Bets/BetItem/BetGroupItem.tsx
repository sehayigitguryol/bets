import { Bet, BetGroup } from "../types";
import Comments from "./Comments";
import MatchDetail from "./MatchDetail";

type Props = {
  betGroup: BetGroup;
};

function BetGroupItem(props: Props) {
  const { betGroup } = props;

  return (
    <div className="border border-solid p-2 rounded-xl bg-slate-100 flex">
      {betGroup.N}
    </div>
  );
}

export default BetGroupItem;
