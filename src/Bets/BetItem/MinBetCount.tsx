import { Bet } from "../types";

type Props = {
  bet: Bet;
};

function MinBetCount(props: Props) {
  const { bet } = props;

  return (
    <div className="grid gap-2">
      <h4>MBS</h4>
      <h4>{bet.MBS}</h4>
    </div>
  );
}

export default MinBetCount;
