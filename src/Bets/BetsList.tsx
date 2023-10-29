import BetItem from "./BetItem/BetItem";
import { useGetBetsQuery } from "./queries";
import { Bet } from "./types";

function BetsList() {
  const { isLoading, data } = useGetBetsQuery();

  const bets: Bet[] = data ?? [];

  return (
    <div className="grid gap-2">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid gap-2">
          {bets.map((bet) => {
            console.log({ bet });
            return <BetItem key={bet.NID} bet={bet} />;
          })}
        </div>
      )}
    </div>
  );
}

export default BetsList;
