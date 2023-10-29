import { BetGroup } from "../types";
import BetOptionItem from "./BetOptionItem";

type Props = {
  betGroup: BetGroup;
  betId: string;
};

function BetGroupItem(props: Props) {
  const { betGroup, betId } = props;

  return (
    <div className="flex gap-2">
      <h4 className=" font-bold">{betGroup.N}</h4>
      {/* For the sake of simplicity, only bet options that can be selected are shown.*/}
      {Object.keys(betGroup.OC).map((option) => (
        <BetOptionItem
          betId={betId}
          betGroupId={betGroup.ID}
          key={option}
          betOption={betGroup.OC[option]}
        />
      ))}
    </div>
  );
}

export default BetGroupItem;
