import BetItem from "./BetItem/BetItem";
import { Bet } from "./types";

type Props = {
  bets: Bet[];
};
function BetsList(props: Props) {
  const { bets } = props;

  return (
    <div className="grid gap-2">
      {bets.map((bet) => (
        <BetItem key={bet.NID} bet={bet} />
      ))}
    </div>
  );
}

export default BetsList;
