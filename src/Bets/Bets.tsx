import BetsList from "./BetsList";
import { useGetBetsQuery } from "./queries";
import { Bet } from "./types";

function Bets() {
  const { isLoading, data } = useGetBetsQuery();

  const bets: Bet[] = data ?? [];

  return (
    <div className="grid gap-2">
      {isLoading ? <div>Loading...</div> : <BetsList bets={bets} />}
    </div>
  );
}

export default Bets;
