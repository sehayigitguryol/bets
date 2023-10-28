import { useGetBetsQuery } from "./queries";

function BetsList() {
  const { isLoading, data } = useGetBetsQuery();

  const bets = data ?? [];

  const matchName = "N";

  return (
    <div className="grid gap-2">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid gap-2">
          {bets.map((bet: any) => (
            <div key={bet.NID}>{bet[matchName]}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BetsList;
