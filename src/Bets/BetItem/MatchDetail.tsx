import { Bet } from "../types";

type Props = {
  bet: Bet;
};

function MatchDetail(props: Props) {
  const { bet } = props;

  return (
    <div className="grid gap-2 w-[400px]">
      <div className="flex gap-1">
        <h3 className="font-bold">{bet.LN}</h3>
        <h3>{`${bet.D} / ${bet.DAY}`}</h3>
      </div>
      <div className="flex gap-3">
        <h3 className="font-bold">{bet.C}</h3>
        <h3>{`${bet.T} ${bet.N}`}</h3>
      </div>
    </div>
  );
}

export default MatchDetail;
