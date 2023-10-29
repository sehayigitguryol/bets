import BetItem from "./BetItem/BetItem";
import { useGetBetsQuery } from "./queries";
import { ApiBet, Bet, BetOption } from "./types";

function collectBetOptions(apiBets: ApiBet[]): BetOption[] {
  return apiBets.flatMap((apiBet) => {
    const betGroups = Object.values(apiBet.OCG);
    const betOptions = betGroups.flatMap((group) => Object.values(group.OC));
    return betOptions;
  });
}

function BetsList() {
  const { isLoading, data } = useGetBetsQuery();

  const bets: Bet[] = data ?? [];

  //   const collected = collectBetOptions(bets);
  console.log({ bets });
  return (
    <div className="grid gap-2">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid gap-2">
          {bets.map((bet) => (
            <BetItem key={bet.NID} bet={bet} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BetsList;
