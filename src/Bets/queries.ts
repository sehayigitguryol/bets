import { useQuery } from "react-query";
import { Bet } from "./types";
import axios from "axios";

export const useGetBetsQuery = () => {
  const queryInfo = useQuery({
    queryKey: ["bets"],
    queryFn: async () => {
      const response = await axios.get<Bet[]>(
        "https://nesine-case-study.onrender.com/bets"
      );

      return response.data.slice(0, 20);
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return queryInfo;
};
