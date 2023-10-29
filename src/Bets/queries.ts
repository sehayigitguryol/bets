import { useQuery } from "react-query";
import { ApiBet, Bet, BetOption } from "./types";
import axios from "axios";

export const useGetBetsQuery = () => {
  const queryInfo = useQuery({
    queryKey: ["bets"],
    queryFn: async () => {
      const response = await axios.get<ApiBet[]>(
        "https://nesine-case-study.onrender.com/bets"
      );

      return response.data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: (apiBets) =>
      apiBets.map((apiBet) => {
        const allBetOptions = collectBetOptions(apiBet);
        const bet: Bet = {
          ...apiBet,
          MBS: Object.values(apiBet.OCG)[0].MBS,
          betOptions: allBetOptions,
        };

        return bet;
      }),
  });

  return queryInfo;
};

function collectBetOptions(apiBet: ApiBet): BetOption[] {
  const betGroups = Object.values(apiBet.OCG);
  const betOptions = betGroups.flatMap((group) => Object.values(group.OC));
  return betOptions;
}
