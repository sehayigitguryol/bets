import { Bet } from "./types";
import { useGetBetsQuery } from "./queries";
import BetsList from "./BetsList";

function Bets() {
  const { data, isLoading } = useGetBetsQuery();

  const bets: Bet[] = data ?? [];

  return (
    <div className="grid gap-2">
      {isLoading ? <div>Loading...</div> : <BetsList bets={bets} />}
    </div>
  );
}

export default Bets;
