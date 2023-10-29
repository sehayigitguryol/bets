import { useMemo, useState } from "react";
import BetItem from "./BetItem/BetItem";
import { Bet } from "./types";

type Props = {
  bets: Bet[];
};

function BetsList(props: Props) {
  const { bets } = props;

  const pageSize = 20;
  const [page, setPage] = useState(1);

  const visibleBets = useMemo(() => {
    return bets.slice(0, page * pageSize);
  }, [bets, page]);

  const hasMore = visibleBets.length < bets.length;

  //TODO: Infinite scroll could be better approach but I ran out of time.
  return (
    <div className="grid gap-2">
      {visibleBets.map((bet) => (
        <BetItem key={bet.NID} bet={bet} />
      ))}
      {hasMore && (
        <div className="grid justify-center">
          <button
            className="p-2 rounded-lg border border-blue-500 bg-blue-200"
            onClick={() => setPage((prev) => prev + 1)}
            type="button"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default BetsList;
